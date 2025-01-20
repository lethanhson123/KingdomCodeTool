namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_FunctionsController : BaseController<Sys_Functions, ISys_FunctionsService>
    {
    private readonly ISys_FunctionsService _Sys_FunctionsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_FunctionsController(ISys_FunctionsService Sys_FunctionsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_FunctionsService, WebHostEnvironment)
    {
    _Sys_FunctionsService = Sys_FunctionsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

