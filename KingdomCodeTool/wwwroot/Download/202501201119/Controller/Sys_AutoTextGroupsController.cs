namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AutoTextGroupsController : BaseController<Sys_AutoTextGroups, ISys_AutoTextGroupsService>
    {
    private readonly ISys_AutoTextGroupsService _Sys_AutoTextGroupsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AutoTextGroupsController(ISys_AutoTextGroupsService Sys_AutoTextGroupsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AutoTextGroupsService, WebHostEnvironment)
    {
    _Sys_AutoTextGroupsService = Sys_AutoTextGroupsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

