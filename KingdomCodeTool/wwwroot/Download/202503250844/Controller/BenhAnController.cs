namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class BenhAnController : BaseController<BenhAn, IBenhAnService>
    {
    private readonly IBenhAnService _BenhAnService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public BenhAnController(IBenhAnService BenhAnService, IWebHostEnvironment WebHostEnvironment) : base(BenhAnService, WebHostEnvironment)
    {
    _BenhAnService = BenhAnService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

