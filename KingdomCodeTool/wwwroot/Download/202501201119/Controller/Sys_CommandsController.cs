namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_CommandsController : BaseController<Sys_Commands, ISys_CommandsService>
    {
    private readonly ISys_CommandsService _Sys_CommandsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_CommandsController(ISys_CommandsService Sys_CommandsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_CommandsService, WebHostEnvironment)
    {
    _Sys_CommandsService = Sys_CommandsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

