using Models.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Business
{
    public class CustomerInsurance
    {
        [Key]
        public long UserInsuranceID { get; set; }
        public DateTime InitDate { get; set; }
        public decimal Price { get; set; }
        public int MonthsDuration { get; set; }
        public RiskTypeEnum RiskType { get; set; }
        [ForeignKey("Customer")]
        public long CustomerCode { get; set; }
        public Customer Customer { get; set; }
        [ForeignKey("Insurance")]
        public long InsuranceCode { get; set; }
        public Insurance Insurance { get; set; }
    }
}
