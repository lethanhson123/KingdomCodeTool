namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ChungTuController : BaseController<ChungTu, IChungTuService>
    {
    private readonly IChungTuService _ChungTuService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ChungTuController(IChungTuService ChungTuService, IWebHostEnvironment WebHostEnvironment) : base(ChungTuService, WebHostEnvironment)
    {
    _ChungTuService = ChungTuService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

