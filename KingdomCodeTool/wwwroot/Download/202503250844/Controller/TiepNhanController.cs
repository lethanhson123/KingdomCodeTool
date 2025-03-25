namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class TiepNhanController : BaseController<TiepNhan, ITiepNhanService>
    {
    private readonly ITiepNhanService _TiepNhanService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public TiepNhanController(ITiepNhanService TiepNhanService, IWebHostEnvironment WebHostEnvironment) : base(TiepNhanService, WebHostEnvironment)
    {
    _TiepNhanService = TiepNhanService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

