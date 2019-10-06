using Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseAccess.Interface
{
    public interface ICustomerInsuranceRepository:IGenericRepository<CustomerInsurance>
    {
        CustomerInsurance GetById(long customerinsuranceid);

        IQueryable<CustomerInsurance> GetByCustomerId(long customerid);
    }
}
