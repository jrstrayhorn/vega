using Microsoft.EntityFrameworkCore;

namespace vega.Models
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options)
            : base(options)
        { }

        public DbSet<MakeModel> MakeModels { get; set; }
        public DbSet<Feature> Features { get; set; }
    }
}