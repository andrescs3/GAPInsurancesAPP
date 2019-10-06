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
using DatabaseAccess.Interface;
using DatabaseAccess.Repositories;
using Models.Business;

namespace CustomerInsuranceAPI.Controllers
{
    public class CustomerInsurancesController : ApiController
    {


        public CustomerInsurancesController(ICustomerInsuranceRepository customerInsuranceRepository, IInsuranceRepository InsuranceRepository) {
            _CustomerInsuranceRepository = customerInsuranceRepository;
            _InsuranceRepository = InsuranceRepository;
        }
        private ICustomerInsuranceRepository _CustomerInsuranceRepository;
        private IInsuranceRepository _InsuranceRepository;

        // GET: api/CustomerInsurances
        public IQueryable<CustomerInsurance> GetCustomerInsurances()
        {
            return _CustomerInsuranceRepository.GetAll();
        }

        // GET: api/CustomerInsurances/5
        [ResponseType(typeof(CustomerInsurance))]
        public IHttpActionResult GetCustomerInsurance(long id)
        {
            CustomerInsurance CustomerInsurance = _CustomerInsuranceRepository.GetById(id);
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

            Insurance insurance = _InsuranceRepository.GetById(CustomerInsurance.InsuranceCode);
            if (insurance == null) {
                return BadRequest();
            }
            CustomerInsurance.Insurance = insurance;
            if (!CustomerInsurance.ValidateCustomerInsurance()) {
                return new System.Web.Http.Results.ResponseMessageResult(
               Request.CreateErrorResponse(
                   (HttpStatusCode)422,
                   new HttpError("Invalid registry, insurances with high risk cannot have 50% or higher of coverage")
               )
           );
            }

            _CustomerInsuranceRepository.Update(CustomerInsurance);
                
            try
            {
                _CustomerInsuranceRepository.Save();
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

                _CustomerInsuranceRepository.Insert(CustomerInsurance);
                _CustomerInsuranceRepository.Save();

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
            CustomerInsurance CustomerInsurance = _CustomerInsuranceRepository.GetById(id);
            if (CustomerInsurance == null)
            {
                return NotFound();
            }

            _CustomerInsuranceRepository.Delete(CustomerInsurance);
            _CustomerInsuranceRepository.Save();

            return Ok(CustomerInsurance);
        }


        private bool CustomerInsuranceExists(long id)
        {
            return _CustomerInsuranceRepository.FindBy(X => X.CustomerInsuranceID == id).Count() > 0;
        }
    }
}