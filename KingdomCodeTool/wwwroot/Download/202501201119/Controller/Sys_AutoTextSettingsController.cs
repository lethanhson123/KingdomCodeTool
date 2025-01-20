namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AutoTextSettingsController : BaseController<Sys_AutoTextSettings, ISys_AutoTextSettingsService>
    {
    private readonly ISys_AutoTextSettingsService _Sys_AutoTextSettingsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AutoTextSettingsController(ISys_AutoTextSettingsService Sys_AutoTextSettingsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AutoTextSettingsService, WebHostEnvironment)
    {
    _Sys_AutoTextSettingsService = Sys_AutoTextSettingsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

