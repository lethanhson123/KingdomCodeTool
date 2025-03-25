namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSKetQuaChiTietController : BaseController<CLSKetQuaChiTiet, ICLSKetQuaChiTietService>
    {
    private readonly ICLSKetQuaChiTietService _CLSKetQuaChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSKetQuaChiTietController(ICLSKetQuaChiTietService CLSKetQuaChiTietService, IWebHostEnvironment WebHostEnvironment) : base(CLSKetQuaChiTietService, WebHostEnvironment)
    {
    _CLSKetQuaChiTietService = CLSKetQuaChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

