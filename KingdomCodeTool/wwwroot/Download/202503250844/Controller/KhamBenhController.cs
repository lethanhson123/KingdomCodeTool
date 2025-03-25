namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class KhamBenhController : BaseController<KhamBenh, IKhamBenhService>
    {
    private readonly IKhamBenhService _KhamBenhService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public KhamBenhController(IKhamBenhService KhamBenhService, IWebHostEnvironment WebHostEnvironment) : base(KhamBenhService, WebHostEnvironment)
    {
    _KhamBenhService = KhamBenhService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

