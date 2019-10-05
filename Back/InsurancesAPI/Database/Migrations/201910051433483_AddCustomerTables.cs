namespace DatabaseAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCustomerTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CustomerInsurances",
                c => new
                    {
                        CustomerInsuranceID = c.Long(nullable: false, identity: true),
                        InitDate = c.DateTime(nullable: false),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        MonthsDuration = c.Int(nullable: false),
                        RiskType = c.Int(nullable: false),
                        CustomerCode = c.Long(nullable: false),
                        InsuranceCode = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.CustomerInsuranceID)
                .ForeignKey("dbo.Customers", t => t.CustomerCode, cascadeDelete: true)
                .ForeignKey("dbo.Insurances", t => t.InsuranceCode, cascadeDelete: true)
                .Index(t => t.CustomerCode)
                .Index(t => t.InsuranceCode);
            
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        CustomerID = c.Long(nullable: false, identity: true),
                        FullName = c.String(),
                        Address = c.String(),
                        Phone = c.String(),
                        Identification = c.String(),
                    })
                .PrimaryKey(t => t.CustomerID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CustomerInsurances", "InsuranceCode", "dbo.Insurances");
            DropForeignKey("dbo.CustomerInsurances", "CustomerCode", "dbo.Customers");
            DropIndex("dbo.CustomerInsurances", new[] { "InsuranceCode" });
            DropIndex("dbo.CustomerInsurances", new[] { "CustomerCode" });
            DropTable("dbo.Customers");
            DropTable("dbo.CustomerInsurances");
        }
    }
}
