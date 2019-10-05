﻿using DatabaseAccess.Interface;
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

        public CustomerInsurance GetById(long customerinsuranceID)
        {
            var query = GetAll().FirstOrDefault(x => x.CustomerInsuranceID == customerinsuranceID);
            return query;
        }
    }
}