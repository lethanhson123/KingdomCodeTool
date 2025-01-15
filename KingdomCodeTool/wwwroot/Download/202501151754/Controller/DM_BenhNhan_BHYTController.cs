namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DM_BenhNhan_BHYTController : BaseController<DM_BenhNhan_BHYT, IDM_BenhNhan_BHYTService>
    {
    private readonly IDM_BenhNhan_BHYTService _DM_BenhNhan_BHYTService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DM_BenhNhan_BHYTController(IDM_BenhNhan_BHYTService DM_BenhNhan_BHYTService, IWebHostEnvironment WebHostEnvironment) : base(DM_BenhNhan_BHYTService, WebHostEnvironment)
    {
    _DM_BenhNhan_BHYTService = DM_BenhNhan_BHYTService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

