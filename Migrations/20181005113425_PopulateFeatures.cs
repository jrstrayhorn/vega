using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class PopulateFeatures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT Features ON");
            migrationBuilder.Sql("INSERT Features (Id, Name) VALUES (1, 'ABS Brakes')");
            migrationBuilder.Sql("INSERT Features (Id, Name) VALUES (2, 'Airbags')");
            migrationBuilder.Sql("INSERT Features (Id, Name) VALUES (3, 'Bottle Holder')");
            migrationBuilder.Sql("SET IDENTITY_INSERT Features OFF");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
