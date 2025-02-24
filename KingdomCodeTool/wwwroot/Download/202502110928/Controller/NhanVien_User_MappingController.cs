namespace API_eHospital_DongNai_A_Dictionary.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NhanVien_User_MappingController : BaseController<NhanVien_User_Mapping, INhanVien_User_MappingService>
    {
    private readonly INhanVien_User_MappingService _NhanVien_User_MappingService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NhanVien_User_MappingController(INhanVien_User_MappingService NhanVien_User_MappingService, IWebHostEnvironment WebHostEnvironment) : base(NhanVien_User_MappingService, WebHostEnvironment)
    {
    _NhanVien_User_MappingService = NhanVien_User_MappingService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

