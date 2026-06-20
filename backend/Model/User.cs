using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

public class User
{   
    [Key]
    public int Id { get; set; }

    [MaxLength(30)]
    [Required]
    public string Nome { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Email { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Status { get; set; } = string.Empty;
}