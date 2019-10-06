using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Models.Business;
using Models.Enums;

namespace InsurancesAPI.Tests
{
    [TestClass]
    public class BusinessTest
    {
        [TestMethod]
        public void TestRiskCoverageValid()
        {

            var TestCustomer = new Customer() { FullName = "Ruiz Andres", Identification = "12233" };
            var TestInsurance = new Insurance() { Name = "Contra incendios", Type = InsuranceTypeEnum.FIRE, Coverage = 30 };

            var TestCustomerInsurance = new CustomerInsurance() { Customer = TestCustomer, Insurance = TestInsurance, RiskType = RiskTypeEnum.HIGH };

            Assert.AreEqual(true, TestCustomerInsurance.ValidateCustomerInsurance());
        }


        [TestMethod]
        public void TestRiskCoverageNotValid()
        {

            var TestCustomer = new Customer() { FullName = "Ruiz Andres", Identification = "12233" };
            var TestInsurance = new Insurance() { Name = "Contra incendios", Type = InsuranceTypeEnum.FIRE, Coverage = 51 };

            var TestCustomerInsurance = new CustomerInsurance() { Customer = TestCustomer, Insurance = TestInsurance, RiskType = RiskTypeEnum.HIGH };

            Assert.AreEqual(false, TestCustomerInsurance.ValidateCustomerInsurance());
        }
    }
}
