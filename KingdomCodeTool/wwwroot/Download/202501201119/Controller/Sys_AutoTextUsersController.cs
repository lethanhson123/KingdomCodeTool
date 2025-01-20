namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AutoTextUsersController : BaseController<Sys_AutoTextUsers, ISys_AutoTextUsersService>
    {
    private readonly ISys_AutoTextUsersService _Sys_AutoTextUsersService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AutoTextUsersController(ISys_AutoTextUsersService Sys_AutoTextUsersService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AutoTextUsersService, WebHostEnvironment)
    {
    _Sys_AutoTextUsersService = Sys_AutoTextUsersService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

