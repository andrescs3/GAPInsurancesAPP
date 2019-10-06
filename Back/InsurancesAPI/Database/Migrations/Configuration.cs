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
            IList<Customer> Customers = new List<Customer>();

            Customers.Add(new Customer() { FullName = "Ruiz Andres", Identification = "12233" });
            Customers.Add(new Customer() { FullName = "Velasco Felipe", Identification = "12234" });

            context.Customers.AddRange(Customers);


            IList<Insurance> Insurances = new List<Insurance>();

            Insurances.Add(new Insurance() { Name = "Contra incendios", Type = InsuranceTypeEnum.FIRE, Coverage = 30 });
            Insurances.Add(new Insurance() { Name = "Contra terremotos", Type = InsuranceTypeEnum.EARTHQUAKE, Coverage = 60 });


            context.Insurances.AddRange(Insurances);

            
            
        }
    }
}
