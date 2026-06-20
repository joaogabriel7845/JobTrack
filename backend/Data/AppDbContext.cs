using Microsoft.EntityFrameworkCore;

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
        modelBuilder.Entity<Application>().HasData(
            new Application
            {
                Id = 1,
                Company = "Google",
                Position = "Auxiliar administrativo",
                Status = "Pendente"
            }
        );
    }
}