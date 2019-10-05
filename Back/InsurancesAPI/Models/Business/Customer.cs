using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Business
{
    public class Customer
    {
        [Key]
        public long CustomerID { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Identification { get; set; }        
    }
}
