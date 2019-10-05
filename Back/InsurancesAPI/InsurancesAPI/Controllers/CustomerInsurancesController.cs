using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DatabaseAccess.Repositories;
using Models.Business;

namespace CustomerInsuranceAPI.Controllers
{
    public class CustomerInsurancesController : ApiController
    {

        private CustomerInsuranceRepository CustomerInsuranceRepository = new CustomerInsuranceRepository();

        // GET: api/CustomerInsurances
        public IQueryable<CustomerInsurance> GetCustomerInsurances()
        {
            return CustomerInsuranceRepository.GetAll();
        }

        // GET: api/CustomerInsurances/5
        [ResponseType(typeof(CustomerInsurance))]
        public IHttpActionResult GetCustomerInsurance(long id)
        {
            CustomerInsurance CustomerInsurance = CustomerInsuranceRepository.GetById(id);
            if (CustomerInsurance == null)
            {
                return NotFound();
            }

            return Ok(CustomerInsurance);
        }

        // PUT: api/CustomerInsurances/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomerInsurance(long id, CustomerInsurance CustomerInsurance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != CustomerInsurance.CustomerInsuranceID)
            {
                return BadRequest();
            }

            CustomerInsuranceRepository.Update(CustomerInsurance);

            try
            {
                CustomerInsuranceRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerInsuranceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CustomerInsurances
        [ResponseType(typeof(CustomerInsurance))]
        public IHttpActionResult PostCustomerInsurance(CustomerInsurance CustomerInsurance)
        {
            if (!(CustomerInsurance.CustomerInsuranceID > 0))
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                CustomerInsuranceRepository.Insert(CustomerInsurance);
                CustomerInsuranceRepository.Save();

                return CreatedAtRoute("DefaultApi", new { id = CustomerInsurance.CustomerInsuranceID }, CustomerInsurance);
            }
            else
            {
                PutCustomerInsurance(CustomerInsurance.CustomerInsuranceID, CustomerInsurance);
                return CreatedAtRoute("DefaultApi", new { id = CustomerInsurance.CustomerInsuranceID }, CustomerInsurance);
            }

        }

        // DELETE: api/CustomerInsurances/5
        [ResponseType(typeof(CustomerInsurance))]
        public IHttpActionResult DeleteCustomerInsurance(long id)
        {
            CustomerInsurance CustomerInsurance = CustomerInsuranceRepository.GetById(id);
            if (CustomerInsurance == null)
            {
                return NotFound();
            }

            CustomerInsuranceRepository.Delete(CustomerInsurance);
            CustomerInsuranceRepository.Save();

            return Ok(CustomerInsurance);
        }


        private bool CustomerInsuranceExists(long id)
        {
            return CustomerInsuranceRepository.FindBy(X => X.CustomerInsuranceID == id).Count() > 0;
        }
    }
}