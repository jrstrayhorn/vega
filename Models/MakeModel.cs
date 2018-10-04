using System.ComponentModel.DataAnnotations;

namespace vega.Models
{
    public class MakeModel
    {
        public int Id { get; set; }

        [Required]
        public string Make { get; set; }

        [Required]
        public string Model { get; set; }
    }
}