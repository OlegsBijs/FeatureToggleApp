using FeatureApp.Models;
using Microsoft.EntityFrameworkCore;


namespace FeatureApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<FeatureToggle> FeatureToggles { get; set; }
    }
}
