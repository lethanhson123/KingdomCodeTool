namespace API_eHospital_DongNai_A_Config.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AppSettingsController : BaseController<Sys_AppSettings, ISys_AppSettingsService>
    {
    private readonly ISys_AppSettingsService _Sys_AppSettingsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AppSettingsController(ISys_AppSettingsService Sys_AppSettingsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AppSettingsService, WebHostEnvironment)
    {
    _Sys_AppSettingsService = Sys_AppSettingsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

