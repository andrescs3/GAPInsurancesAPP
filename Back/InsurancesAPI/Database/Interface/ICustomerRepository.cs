using Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseAccess.Interface
{
    public interface ICustomerRepository : IGenericRepository<Customer>
    {
        Customer GetById(long customerid);
    }
}
