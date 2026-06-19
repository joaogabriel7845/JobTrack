using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApplicationController : ControllerBase
{
    private readonly AppDbContext _context;

    public ApplicationController( AppDbContext context )
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var applications = await _context.Applications.ToListAsync();
            return Ok(applications);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create(Application application)
    {
        try
        {
            _context.Applications.Add(application);
            await _context.SaveChangesAsync();
            return Ok(application);
        }
        catch (Exception ex)
        {
           return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpPut]

    public async Task<IActionResult> Edit(int id, [FromBody] Application application)
    {
        try
        {
            if (id != application.Id)
            {
                return BadRequest("ID in url and body mismatches");
            }
            if (!await _context.Applications.AnyAsync(a => a.Id == id))
            {
                return NotFound();
            }
            _context.Applications.Update(application);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch(Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
}