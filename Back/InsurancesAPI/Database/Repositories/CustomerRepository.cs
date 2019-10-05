using Database.Interface;
using DatabaseAccess.DBContext;
using Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.Repositories
{
    public class CustomerRepository : GenericRepository<InsurancesDBContext, Customer>, ICustomerRepository
    {
        public Customer GetById(long customerid)
        {
            var query = GetAll().FirstOrDefault(x => x.CustomerID == customerid);
            return query;
        }

    }
}
