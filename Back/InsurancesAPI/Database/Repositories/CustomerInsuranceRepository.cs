using DatabaseAccess.Interface;
using DatabaseAccess.DBContext;
using Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseAccess.Repositories
{
   public class CustomerInsuranceRepository : GenericRepository<InsurancesDBContext, CustomerInsurance>, ICustomerInsuranceRepository
    {
        public IQueryable<CustomerInsurance> GetByCustomerId(long customerid)
        {
            var query = GetAll().Where(x => x.CustomerCode == customerid);
            return query;
        }

        public CustomerInsurance GetById(long customerinsuranceID)
        {
            var query = GetAll().FirstOrDefault(x => x.CustomerInsuranceID == customerinsuranceID);
            return query;
        }
    }
}