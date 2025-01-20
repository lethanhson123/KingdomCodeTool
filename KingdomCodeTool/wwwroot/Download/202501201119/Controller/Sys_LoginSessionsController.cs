namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_LoginSessionsController : BaseController<Sys_LoginSessions, ISys_LoginSessionsService>
    {
    private readonly ISys_LoginSessionsService _Sys_LoginSessionsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_LoginSessionsController(ISys_LoginSessionsService Sys_LoginSessionsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_LoginSessionsService, WebHostEnvironment)
    {
    _Sys_LoginSessionsService = Sys_LoginSessionsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

