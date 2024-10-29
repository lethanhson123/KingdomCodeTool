namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucTinhTrangController : BaseController<DanhMucTinhTrang, IDanhMucTinhTrangService>
    {
    private readonly IDanhMucTinhTrangService _DanhMucTinhTrangService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucTinhTrangController(IDanhMucTinhTrangService DanhMucTinhTrangService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucTinhTrangService, WebHostEnvironment)
    {
    _DanhMucTinhTrangService = DanhMucTinhTrangService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

