namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_GroupMenusController : BaseController<Sys_GroupMenus, ISys_GroupMenusService>
    {
    private readonly ISys_GroupMenusService _Sys_GroupMenusService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_GroupMenusController(ISys_GroupMenusService Sys_GroupMenusService, IWebHostEnvironment WebHostEnvironment) : base(Sys_GroupMenusService, WebHostEnvironment)
    {
    _Sys_GroupMenusService = Sys_GroupMenusService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

