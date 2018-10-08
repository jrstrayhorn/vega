using AutoMapper;
using vega.Dtos;
using vega.Models;

namespace vega
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Feature, FeatureDto>();
        }
    }
}