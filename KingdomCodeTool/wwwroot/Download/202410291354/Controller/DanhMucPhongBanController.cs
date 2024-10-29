namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucPhongBanController : BaseController<DanhMucPhongBan, IDanhMucPhongBanService>
    {
    private readonly IDanhMucPhongBanService _DanhMucPhongBanService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucPhongBanController(IDanhMucPhongBanService DanhMucPhongBanService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucPhongBanService, WebHostEnvironment)
    {
    _DanhMucPhongBanService = DanhMucPhongBanService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

