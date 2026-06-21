using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Enums;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApplicationController : ControllerBase
{

    private IApplicationService _applicationService;
    
    public ApplicationController(IApplicationService applicationService)
    {
        _applicationService = applicationService;
    }

    [HttpGet]
    public async Task<ActionResult<IAsyncEnumerable<Application>>> GetApplications()
    {
        var applications = await _applicationService.GetApplications();
        return Ok(applications);
    }

    [HttpGet("ApplicationsByName")]
    public async Task<ActionResult<IAsyncEnumerable<Application>>> GetApplicationsByName([FromQuery] string positionName)
    {
        var applications = await _applicationService.GetApplicationsByName(positionName);

        if(applications.Count() == 0)
        {
            return NotFound($"No applications with position {positionName} found");
        }

        return Ok(applications);
    }

    [HttpGet("{id:int}", Name="GetApplication")]
    public async Task<ActionResult<Application>> GetApplication(int id)
    {
        var application = await _applicationService.GetApplication(id);

        if (application == null)
        {
            return NotFound($"Application (ID: {id}) not found");
        }

        return Ok(application);
    }

    [HttpGet("status/{status}")]
    public async Task<ActionResult> GetByStatus(ApplicationStatus status)
    {
        var applications = await _applicationService.GetApplicationsWithStatus(status);

        return Ok(applications);
    }

    [HttpPost]
    public async Task<ActionResult> CreateApplication(Application application)
    {
        await _applicationService.CreateApplication(application);
        return CreatedAtRoute(nameof(GetApplication), new {id = application.Id}, application);
        
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateApplication(int id, [FromBody] Application application)
    {
        application.Id = id;

        await _applicationService.UpdateApplication(application);
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> DeleteApplication(int id)
    {
        var application = await _applicationService.GetApplication(id);

        if (application == null)
        {
            return NotFound($"Application ID: {id} not found");
        }

        await _applicationService.DeleteApplication(application);
        return Ok($"Application ID: {id} deleted successfully");
    }
}