using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace InsurancesAPI.Tests
{
    [TestClass]
    public class IntegrationTest
    {
        
        
        private string _url = "http://localhost:60681/";



        [TestMethod]
        public async Task TestGetAll()
        {
            
            
            using (var client = new HttpClient()) {
                client.BaseAddress = new Uri(_url);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //GET Method  
                HttpResponseMessage response =  await client.GetAsync($"{_url}api/Customers");

                Assert.AreEqual(true, response.IsSuccessStatusCode);
                Assert.IsNotNull(response.Content);

            }


        }
    }
}
