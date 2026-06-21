using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

public class User
{   
    public int Id { get; set; }

    [MaxLength(30)]
    [Required]
    public string Name { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Email { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string PasswordHash { get; set; } = string.Empty;
}