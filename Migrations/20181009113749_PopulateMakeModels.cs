using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class PopulateMakeModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT MakeModels ON");
            migrationBuilder.Sql("INSERT MakeModels (Id, Make, Model) VALUES (1, 'BMW', 'E90')");
            migrationBuilder.Sql("INSERT MakeModels (Id, Make, Model) VALUES (2, 'Hyundai', 'Sonata')");
            migrationBuilder.Sql("INSERT MakeModels (Id, Make, Model) VALUES (3, 'Nissan', 'Altima')");
            migrationBuilder.Sql("SET IDENTITY_INSERT MakeModels OFF");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
