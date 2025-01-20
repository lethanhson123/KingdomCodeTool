namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ModulesController : BaseController<Sys_Modules, ISys_ModulesService>
    {
    private readonly ISys_ModulesService _Sys_ModulesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ModulesController(ISys_ModulesService Sys_ModulesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ModulesService, WebHostEnvironment)
    {
    _Sys_ModulesService = Sys_ModulesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

