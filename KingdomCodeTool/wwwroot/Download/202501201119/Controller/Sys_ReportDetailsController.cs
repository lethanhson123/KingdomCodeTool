namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ReportDetailsController : BaseController<Sys_ReportDetails, ISys_ReportDetailsService>
    {
    private readonly ISys_ReportDetailsService _Sys_ReportDetailsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ReportDetailsController(ISys_ReportDetailsService Sys_ReportDetailsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ReportDetailsService, WebHostEnvironment)
    {
    _Sys_ReportDetailsService = Sys_ReportDetailsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

