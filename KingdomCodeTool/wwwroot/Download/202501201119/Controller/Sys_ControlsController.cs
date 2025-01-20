namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ControlsController : BaseController<Sys_Controls, ISys_ControlsService>
    {
    private readonly ISys_ControlsService _Sys_ControlsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ControlsController(ISys_ControlsService Sys_ControlsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ControlsService, WebHostEnvironment)
    {
    _Sys_ControlsService = Sys_ControlsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

