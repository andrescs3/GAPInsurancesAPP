using Models.Business;
using System.Data.Entity;

namespace DatabaseAccess.DBContext
{
    public class InsurancesDBContext : DbContext
    {

        public InsurancesDBContext() : base("APIConnectionString")
        {

        }


        public DbSet<Insurance> Insurances { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerInsurance> CustomerInsurances { get; set; }

    }
}

