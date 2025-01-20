namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_UserCommandsController : BaseController<Sys_UserCommands, ISys_UserCommandsService>
    {
    private readonly ISys_UserCommandsService _Sys_UserCommandsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_UserCommandsController(ISys_UserCommandsService Sys_UserCommandsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_UserCommandsService, WebHostEnvironment)
    {
    _Sys_UserCommandsService = Sys_UserCommandsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

