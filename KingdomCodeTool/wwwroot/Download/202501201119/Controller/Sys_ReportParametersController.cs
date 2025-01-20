namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ReportParametersController : BaseController<Sys_ReportParameters, ISys_ReportParametersService>
    {
    private readonly ISys_ReportParametersService _Sys_ReportParametersService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ReportParametersController(ISys_ReportParametersService Sys_ReportParametersService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ReportParametersService, WebHostEnvironment)
    {
    _Sys_ReportParametersService = Sys_ReportParametersService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

