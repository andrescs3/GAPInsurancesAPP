namespace DatabaseAccess.Migrations
{
    using DatabaseAccess.DBContext;
    using Models.Business;
    using Models.Enums;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DBContext.InsurancesDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(InsurancesDBContext context)
        {
            IList<Customer> Users = new List<Customer>();

            Users.Add(new Customer() { FullName = "Ruiz Andres", Identification = "12233" });
            Users.Add(new Customer() { FullName = "Velasco Felipe", Identification = "12234" });

            context.Customers.AddRange(Users);


            IList<Insurance> Insurances = new List<Insurance>();

            Insurances.Add(new Insurance() { Name = "2Contra incendios", Type = InsuranceTypeEnum.FIRE });
            Insurances.Add(new Insurance() { Name = "2Contra terremotos", Type = InsuranceTypeEnum.EARTHQUAKE });


            context.Insurances.AddRange(Insurances);

            
            
        }
    }
}
