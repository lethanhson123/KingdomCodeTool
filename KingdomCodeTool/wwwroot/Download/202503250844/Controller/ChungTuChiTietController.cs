namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ChungTuChiTietController : BaseController<ChungTuChiTiet, IChungTuChiTietService>
    {
    private readonly IChungTuChiTietService _ChungTuChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ChungTuChiTietController(IChungTuChiTietService ChungTuChiTietService, IWebHostEnvironment WebHostEnvironment) : base(ChungTuChiTietService, WebHostEnvironment)
    {
    _ChungTuChiTietService = ChungTuChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

