namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_GroupsController : BaseController<Sys_Groups, ISys_GroupsService>
    {
    private readonly ISys_GroupsService _Sys_GroupsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_GroupsController(ISys_GroupsService Sys_GroupsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_GroupsService, WebHostEnvironment)
    {
    _Sys_GroupsService = Sys_GroupsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

