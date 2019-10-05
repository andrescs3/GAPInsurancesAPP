
using DatabaseAccess.Repositories;
using Models.Business;
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


namespace InsuranceAPI.Controllers
{
    public class CustomersController : ApiController
    {

        private DatabaseAccess.Repositories.CustomerRepository CustomerRepository = new CustomerRepository();        

        // GET: api/Customers
        public IQueryable<Customer> GetCustomers()
        {
            return CustomerRepository.GetAll();
        }

        // GET: api/Customers/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult GetCustomer(long id)
        {
            Customer Customer = CustomerRepository.GetById(id);
            if (Customer == null)
            {
                return NotFound();
            }

            return Ok(Customer);
        }

        // PUT: api/Customers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer(long id, Customer Customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Customer.CustomerID)
            {
                return BadRequest();
            }

            CustomerRepository.Update(Customer);

            try
            {
                CustomerRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
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

        // POST: api/Customers
        [ResponseType(typeof(Customer))]
        public IHttpActionResult PostCustomer(Customer Customer)
        {
            if (!(Customer.CustomerID > 0))
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                CustomerRepository.Insert(Customer);
                CustomerRepository.Save();

                return CreatedAtRoute("DefaultApi", new { id = Customer.CustomerID }, Customer);
            }
            else {
                PutCustomer(Customer.CustomerID, Customer);
                return CreatedAtRoute("DefaultApi", new { id = Customer.CustomerID }, Customer);
            }
           
        }

        // DELETE: api/Customers/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult DeleteCustomer(long id)
        {
            Customer Customer = CustomerRepository.GetById(id);
            if (Customer == null)
            {
                return NotFound();
            }

            CustomerRepository.Delete(Customer);
            CustomerRepository.Save();

            return Ok(Customer);
        }


        private bool CustomerExists(long id)
        {
            return CustomerRepository.FindBy(X => X.CustomerID == id).Count() > 0;
        }
    }
}