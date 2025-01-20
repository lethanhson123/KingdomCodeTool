namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_MenusController : BaseController<Sys_Menus, ISys_MenusService>
    {
    private readonly ISys_MenusService _Sys_MenusService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_MenusController(ISys_MenusService Sys_MenusService, IWebHostEnvironment WebHostEnvironment) : base(Sys_MenusService, WebHostEnvironment)
    {
    _Sys_MenusService = Sys_MenusService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

