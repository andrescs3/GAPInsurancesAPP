using Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace Models.Business
{
    public class Insurance
    {
        [Key]
        public long InsuranceID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public InsuranceTypeEnum Type { get; set; }
        public decimal Coverage { get; set; }
    }
}
