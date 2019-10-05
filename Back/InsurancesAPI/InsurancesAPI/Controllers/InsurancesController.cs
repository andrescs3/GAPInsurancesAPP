using DatabaseAccess.Repositories;
using Models.Business;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace InsuranceAPI.Controllers
{
    public class InsurancesController : ApiController
    {

        private InsuranceRepository InsuranceRepository = new InsuranceRepository();

        // GET: api/Insurances
        public IQueryable<Insurance> GetInsurances()
        {
            return InsuranceRepository.GetAll();
        }

        // GET: api/Insurances/5
        [ResponseType(typeof(Insurance))]
        public IHttpActionResult GetInsurance(long id)
        {
            Insurance Insurance = InsuranceRepository.GetById(id);
            if (Insurance == null)
            {
                return NotFound();
            }

            return Ok(Insurance);
        }

        // PUT: api/Insurances/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInsurance(long id, Insurance Insurance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Insurance.InsuranceID)
            {
                return BadRequest();
            }

            InsuranceRepository.Update(Insurance);

            try
            {
                InsuranceRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceExists(id))
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

        // POST: api/Insurances
        [ResponseType(typeof(Insurance))]
        public IHttpActionResult PostInsurance(Insurance Insurance)
        {
            if (!(Insurance.InsuranceID > 0))
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                InsuranceRepository.Insert(Insurance);
                InsuranceRepository.Save();

                return CreatedAtRoute("DefaultApi", new { id = Insurance.InsuranceID }, Insurance);
            }
            else
            {
                PutInsurance(Insurance.InsuranceID, Insurance);
                return CreatedAtRoute("DefaultApi", new { id = Insurance.InsuranceID }, Insurance);
            }

        }

        // DELETE: api/Insurances/5
        [ResponseType(typeof(Insurance))]
        public IHttpActionResult DeleteInsurance(long id)
        {
            Insurance Insurance = InsuranceRepository.GetById(id);
            if (Insurance == null)
            {
                return NotFound();
            }

            InsuranceRepository.Delete(Insurance);
            InsuranceRepository.Save();

            return Ok(Insurance);
        }


        private bool InsuranceExists(long id)
        {
            return InsuranceRepository.FindBy(X => X.InsuranceID == id).Count() > 0;
        }
    }
}