using backend.Services;
using backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IAuthService _authService;

    public AuthController(IUserService userService, IAuthService authService)
    {
        _userService = userService;
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO dto)
    {
        var user = await _userService.GetByEmail(dto.Email);

        if (user == null) return Unauthorized("Invalid credentials");

        bool passwordIsValid = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);

        if (!passwordIsValid) return Unauthorized("Wrong password");

        var token = _authService.GenerateToken(user);

        return Ok(new { token });
    }
}