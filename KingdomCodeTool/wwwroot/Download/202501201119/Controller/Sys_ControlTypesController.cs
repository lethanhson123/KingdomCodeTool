namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ControlTypesController : BaseController<Sys_ControlTypes, ISys_ControlTypesService>
    {
    private readonly ISys_ControlTypesService _Sys_ControlTypesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ControlTypesController(ISys_ControlTypesService Sys_ControlTypesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ControlTypesService, WebHostEnvironment)
    {
    _Sys_ControlTypesService = Sys_ControlTypesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

