using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace vega.Models
{
    public class Vehicle
    {
        public int Id { get; set; }
        public bool? IsRegistered { get; set; }
        
        [Required]
        [StringLength(255)]
        public string ContactName { get; set; }
        
        [Required]
        [StringLength(255)]
        public string ContactPhone { get; set; }
        public string ContactEmail { get; set; }

        public int? MakeId { get; set; }
        public Make Make { get; set; }

        [Required]
        public int ModelId { get; set; }
        public Model Model { get; set; }

        public DateTime LastUpdate { get; set; }

        public List<VehicleFeature> VehicleFeatures { get; set; }
    }
}
