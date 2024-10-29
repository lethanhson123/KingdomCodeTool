namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucCongViecController : BaseController<DanhMucCongViec, IDanhMucCongViecService>
    {
    private readonly IDanhMucCongViecService _DanhMucCongViecService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucCongViecController(IDanhMucCongViecService DanhMucCongViecService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucCongViecService, WebHostEnvironment)
    {
    _DanhMucCongViecService = DanhMucCongViecService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

