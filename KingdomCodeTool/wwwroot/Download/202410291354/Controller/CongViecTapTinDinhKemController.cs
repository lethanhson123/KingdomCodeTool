namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CongViecTapTinDinhKemController : BaseController<CongViecTapTinDinhKem, ICongViecTapTinDinhKemService>
    {
    private readonly ICongViecTapTinDinhKemService _CongViecTapTinDinhKemService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CongViecTapTinDinhKemController(ICongViecTapTinDinhKemService CongViecTapTinDinhKemService, IWebHostEnvironment WebHostEnvironment) : base(CongViecTapTinDinhKemService, WebHostEnvironment)
    {
    _CongViecTapTinDinhKemService = CongViecTapTinDinhKemService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

