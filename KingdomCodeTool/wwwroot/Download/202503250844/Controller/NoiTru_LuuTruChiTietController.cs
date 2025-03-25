namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NoiTru_LuuTruChiTietController : BaseController<NoiTru_LuuTruChiTiet, INoiTru_LuuTruChiTietService>
    {
    private readonly INoiTru_LuuTruChiTietService _NoiTru_LuuTruChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NoiTru_LuuTruChiTietController(INoiTru_LuuTruChiTietService NoiTru_LuuTruChiTietService, IWebHostEnvironment WebHostEnvironment) : base(NoiTru_LuuTruChiTietService, WebHostEnvironment)
    {
    _NoiTru_LuuTruChiTietService = NoiTru_LuuTruChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

