namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ConfigurationsController : BaseController<Sys_Configurations, ISys_ConfigurationsService>
    {
    private readonly ISys_ConfigurationsService _Sys_ConfigurationsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ConfigurationsController(ISys_ConfigurationsService Sys_ConfigurationsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ConfigurationsService, WebHostEnvironment)
    {
    _Sys_ConfigurationsService = Sys_ConfigurationsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

