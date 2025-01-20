namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ParametersController : BaseController<Sys_Parameters, ISys_ParametersService>
    {
    private readonly ISys_ParametersService _Sys_ParametersService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ParametersController(ISys_ParametersService Sys_ParametersService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ParametersService, WebHostEnvironment)
    {
    _Sys_ParametersService = Sys_ParametersService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

