using AutoMapper;
using vega.Controllers.Resources;
using vega.Dtos;
using vega.Models;

namespace vega.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to Resource
            CreateMap<Feature, FeatureDto>();
            //CreateMap<MakeModel, MakeModelDto>();
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}