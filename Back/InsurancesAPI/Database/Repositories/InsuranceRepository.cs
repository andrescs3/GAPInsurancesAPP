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
    public class InsuranceRepository : GenericRepository<InsurancesDBContext, Insurance>, IInsuranceRepository
    {
        public Insurance GetById(long insuranceid)
        {
            var query = GetAll().FirstOrDefault(x => x.InsuranceID == insuranceid);
            return query;
        }
    }
}