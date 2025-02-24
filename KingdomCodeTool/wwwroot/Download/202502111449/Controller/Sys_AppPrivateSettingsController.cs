namespace API_eHospital_DongNai_A_Config.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AppPrivateSettingsController : BaseController<Sys_AppPrivateSettings, ISys_AppPrivateSettingsService>
    {
    private readonly ISys_AppPrivateSettingsService _Sys_AppPrivateSettingsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AppPrivateSettingsController(ISys_AppPrivateSettingsService Sys_AppPrivateSettingsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AppPrivateSettingsService, WebHostEnvironment)
    {
    _Sys_AppPrivateSettingsService = Sys_AppPrivateSettingsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

