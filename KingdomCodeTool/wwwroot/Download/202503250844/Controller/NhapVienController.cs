namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NhapVienController : BaseController<NhapVien, INhapVienService>
    {
    private readonly INhapVienService _NhapVienService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NhapVienController(INhapVienService NhapVienService, IWebHostEnvironment WebHostEnvironment) : base(NhapVienService, WebHostEnvironment)
    {
    _NhapVienService = NhapVienService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

