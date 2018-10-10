using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using vega.Dtos;
using vega.Persistence;

namespace vega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeaturesController : ControllerBase
    {
        private readonly VegaDbContext _context;
        private readonly IMapper _mapper;

        public FeaturesController(VegaDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<List<FeatureDto>> GetAll()
        {
            return _mapper.Map<List<FeatureDto>>(_context.Features.ToList());
        }
    }
}