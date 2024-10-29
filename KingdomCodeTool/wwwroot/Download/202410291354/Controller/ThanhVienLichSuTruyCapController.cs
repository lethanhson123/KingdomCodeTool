namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ThanhVienLichSuTruyCapController : BaseController<ThanhVienLichSuTruyCap, IThanhVienLichSuTruyCapService>
    {
    private readonly IThanhVienLichSuTruyCapService _ThanhVienLichSuTruyCapService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ThanhVienLichSuTruyCapController(IThanhVienLichSuTruyCapService ThanhVienLichSuTruyCapService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienLichSuTruyCapService, WebHostEnvironment)
    {
    _ThanhVienLichSuTruyCapService = ThanhVienLichSuTruyCapService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

