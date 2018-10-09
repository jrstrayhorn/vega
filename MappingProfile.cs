using AutoMapper;
using vega.Dtos;
using vega.Models;

namespace vega
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to Dto
            CreateMap<Feature, FeatureDto>();
            CreateMap<MakeModel, MakeModelDto>();
        }
    }
}