namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Log_UpdateInformationController : BaseController<Log_UpdateInformation, ILog_UpdateInformationService>
    {
    private readonly ILog_UpdateInformationService _Log_UpdateInformationService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Log_UpdateInformationController(ILog_UpdateInformationService Log_UpdateInformationService, IWebHostEnvironment WebHostEnvironment) : base(Log_UpdateInformationService, WebHostEnvironment)
    {
    _Log_UpdateInformationService = Log_UpdateInformationService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

