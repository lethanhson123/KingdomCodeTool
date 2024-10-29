namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CongViecController : BaseController<CongViec, ICongViecService>
    {
    private readonly ICongViecService _CongViecService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CongViecController(ICongViecService CongViecService, IWebHostEnvironment WebHostEnvironment) : base(CongViecService, WebHostEnvironment)
    {
    _CongViecService = CongViecService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

