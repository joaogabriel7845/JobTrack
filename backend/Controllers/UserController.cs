using backend.Services;
using Microsoft.AspNetCore.Mvc;
using backend.DTOs;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private IUserService _userService;
    
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<User>> GetById(int id)
    {
        var user = await _userService.GetById(id);

        if (user == null) return NotFound($"User ID {id} not found");

        return Ok(user);
    }

    [HttpGet("by-email")]
    public async Task<ActionResult<User>> GetByEmail([FromQuery] string email)
    {
        var user = await _userService.GetByEmail(email);

        if (user == null) return NotFound($"User with e-mail: {email} not found");

        return Ok(user);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDTO dto)
    {
        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            PasswordHash = dto.Password
        };

        await _userService.CreateUser(user);
        return Ok("User created successfully");
    }
}