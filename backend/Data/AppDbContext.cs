using Microsoft.EntityFrameworkCore;
using backend.Enums;
public class AppDbContext : DbContext
{
    public AppDbContext(
        DbContextOptions<AppDbContext> options
    ) : base(options)
    {
    }

    public DbSet<Application> Applications { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Application>().Property(a => a.Status).HasConversion<string>();

        modelBuilder.Entity<Application>().HasData(
            new Application
            {
                Id = 1,
                Company = "Google",
                Position = "Auxiliar administrativo",
                Status = ApplicationStatus.Pending
            },
            new Application {
                Id = 2,
                Company = "Amazon",
                Position = "Auxiliar logístico",
                Status = ApplicationStatus.Cancelled
            }
        );
    }
}