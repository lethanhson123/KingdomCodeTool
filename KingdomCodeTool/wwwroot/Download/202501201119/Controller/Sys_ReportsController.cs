namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ReportsController : BaseController<Sys_Reports, ISys_ReportsService>
    {
    private readonly ISys_ReportsService _Sys_ReportsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ReportsController(ISys_ReportsService Sys_ReportsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ReportsService, WebHostEnvironment)
    {
    _Sys_ReportsService = Sys_ReportsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

