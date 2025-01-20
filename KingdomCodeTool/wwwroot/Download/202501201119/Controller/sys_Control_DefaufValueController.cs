namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class sys_Control_DefaufValueController : BaseController<sys_Control_DefaufValue, Isys_Control_DefaufValueService>
    {
    private readonly Isys_Control_DefaufValueService _sys_Control_DefaufValueService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public sys_Control_DefaufValueController(Isys_Control_DefaufValueService sys_Control_DefaufValueService, IWebHostEnvironment WebHostEnvironment) : base(sys_Control_DefaufValueService, WebHostEnvironment)
    {
    _sys_Control_DefaufValueService = sys_Control_DefaufValueService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

