namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_CommandApplyPermissionsController : BaseController<Sys_CommandApplyPermissions, ISys_CommandApplyPermissionsService>
    {
    private readonly ISys_CommandApplyPermissionsService _Sys_CommandApplyPermissionsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_CommandApplyPermissionsController(ISys_CommandApplyPermissionsService Sys_CommandApplyPermissionsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_CommandApplyPermissionsService, WebHostEnvironment)
    {
    _Sys_CommandApplyPermissionsService = Sys_CommandApplyPermissionsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

