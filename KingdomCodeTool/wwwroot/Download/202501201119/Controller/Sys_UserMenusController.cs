namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_UserMenusController : BaseController<Sys_UserMenus, ISys_UserMenusService>
    {
    private readonly ISys_UserMenusService _Sys_UserMenusService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_UserMenusController(ISys_UserMenusService Sys_UserMenusService, IWebHostEnvironment WebHostEnvironment) : base(Sys_UserMenusService, WebHostEnvironment)
    {
    _Sys_UserMenusService = Sys_UserMenusService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

