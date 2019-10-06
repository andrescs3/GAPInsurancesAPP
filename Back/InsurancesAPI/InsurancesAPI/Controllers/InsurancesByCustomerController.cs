using DatabaseAccess.Interface;
using Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InsurancesAPI.Controllers
{
    public class InsurancesByCustomerController : ApiController
    {
        private ICustomerInsuranceRepository _CustomerInsuranceRepository;
        public InsurancesByCustomerController(ICustomerInsuranceRepository customerInsuranceRepository)
        {
            _CustomerInsuranceRepository = customerInsuranceRepository;
        }

        public IQueryable<CustomerInsurance> GetCustomerInsurance(long customerid)
        {
            return _CustomerInsuranceRepository.GetByCustomerId(customerid);
        }
    }
}
