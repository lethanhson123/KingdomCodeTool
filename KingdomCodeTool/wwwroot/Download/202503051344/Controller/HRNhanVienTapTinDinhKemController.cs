namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class HRNhanVienTapTinDinhKemController : BaseController<HRNhanVienTapTinDinhKem, IHRNhanVienTapTinDinhKemService>
    {
    private readonly IHRNhanVienTapTinDinhKemService _HRNhanVienTapTinDinhKemService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public HRNhanVienTapTinDinhKemController(IHRNhanVienTapTinDinhKemService HRNhanVienTapTinDinhKemService, IWebHostEnvironment WebHostEnvironment) : base(HRNhanVienTapTinDinhKemService, WebHostEnvironment)
    {
    _HRNhanVienTapTinDinhKemService = HRNhanVienTapTinDinhKemService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

