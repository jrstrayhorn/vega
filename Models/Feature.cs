using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace vega.Models
{
    public class Feature
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public List<VehicleFeature> VehicleFeatures { get; set; }
    }
}