namespace API_eHospital_DongNai_A_Dictionary.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DM_BenhNhanController : BaseController<DM_BenhNhan, IDM_BenhNhanService>
    {
    private readonly IDM_BenhNhanService _DM_BenhNhanService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DM_BenhNhanController(IDM_BenhNhanService DM_BenhNhanService, IWebHostEnvironment WebHostEnvironment) : base(DM_BenhNhanService, WebHostEnvironment)
    {
    _DM_BenhNhanService = DM_BenhNhanService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

