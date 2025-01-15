namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DM_DonViHanhChinhController : BaseController<DM_DonViHanhChinh, IDM_DonViHanhChinhService>
    {
    private readonly IDM_DonViHanhChinhService _DM_DonViHanhChinhService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DM_DonViHanhChinhController(IDM_DonViHanhChinhService DM_DonViHanhChinhService, IWebHostEnvironment WebHostEnvironment) : base(DM_DonViHanhChinhService, WebHostEnvironment)
    {
    _DM_DonViHanhChinhService = DM_DonViHanhChinhService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

