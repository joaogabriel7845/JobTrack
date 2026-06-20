using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RenamedApplication : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Empresa",
                table: "Applications",
                newName: "Position");

            migrationBuilder.RenameColumn(
                name: "Cargo",
                table: "Applications",
                newName: "Company");

            migrationBuilder.UpdateData(
                table: "Applications",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Company", "Position" },
                values: new object[] { "Google", "Auxiliar administrativo" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Position",
                table: "Applications",
                newName: "Empresa");

            migrationBuilder.RenameColumn(
                name: "Company",
                table: "Applications",
                newName: "Cargo");

            migrationBuilder.UpdateData(
                table: "Applications",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Cargo", "Empresa" },
                values: new object[] { "Auxiliar administrativo", "Google" });
        }
    }
}
