using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

public class Application
{   
    [Key]
    public int Id { get; set; }

    [MaxLength(30)]
    [Required]
    public string Empresa { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Cargo { get; set; } = string.Empty;
    [MaxLength(30)]
    [Required]
    public string Status { get; set; } = string.Empty;
}