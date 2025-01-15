namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DM_BenhVienController : BaseController<DM_BenhVien, IDM_BenhVienService>
    {
    private readonly IDM_BenhVienService _DM_BenhVienService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DM_BenhVienController(IDM_BenhVienService DM_BenhVienService, IWebHostEnvironment WebHostEnvironment) : base(DM_BenhVienService, WebHostEnvironment)
    {
    _DM_BenhVienService = DM_BenhVienService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

