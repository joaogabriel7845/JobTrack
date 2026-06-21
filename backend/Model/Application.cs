using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

using backend.Enums;

public class Application
{   
    public int Id { get; set; }

    [MaxLength(30)]
    [Required]
    public string Company { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Position { get; set; } = string.Empty;
    [Required]
    public ApplicationStatus Status { get; set; }
}