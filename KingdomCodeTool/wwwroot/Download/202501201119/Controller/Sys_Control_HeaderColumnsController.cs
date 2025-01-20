namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_Control_HeaderColumnsController : BaseController<Sys_Control_HeaderColumns, ISys_Control_HeaderColumnsService>
    {
    private readonly ISys_Control_HeaderColumnsService _Sys_Control_HeaderColumnsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_Control_HeaderColumnsController(ISys_Control_HeaderColumnsService Sys_Control_HeaderColumnsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_Control_HeaderColumnsService, WebHostEnvironment)
    {
    _Sys_Control_HeaderColumnsService = Sys_Control_HeaderColumnsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

