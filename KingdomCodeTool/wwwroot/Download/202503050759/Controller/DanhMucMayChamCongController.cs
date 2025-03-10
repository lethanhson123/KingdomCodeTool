namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucMayChamCongController : BaseController<DanhMucMayChamCong, IDanhMucMayChamCongService>
    {
    private readonly IDanhMucMayChamCongService _DanhMucMayChamCongService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucMayChamCongController(IDanhMucMayChamCongService DanhMucMayChamCongService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucMayChamCongService, WebHostEnvironment)
    {
    _DanhMucMayChamCongService = DanhMucMayChamCongService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

