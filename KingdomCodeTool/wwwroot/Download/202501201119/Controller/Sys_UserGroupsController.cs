namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_UserGroupsController : BaseController<Sys_UserGroups, ISys_UserGroupsService>
    {
    private readonly ISys_UserGroupsService _Sys_UserGroupsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_UserGroupsController(ISys_UserGroupsService Sys_UserGroupsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_UserGroupsService, WebHostEnvironment)
    {
    _Sys_UserGroupsService = Sys_UserGroupsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

