namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class HoaDonController : BaseController<HoaDon, IHoaDonService>
    {
    private readonly IHoaDonService _HoaDonService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public HoaDonController(IHoaDonService HoaDonService, IWebHostEnvironment WebHostEnvironment) : base(HoaDonService, WebHostEnvironment)
    {
    _HoaDonService = HoaDonService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

