namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_AutoTextsController : BaseController<Sys_AutoTexts, ISys_AutoTextsService>
    {
    private readonly ISys_AutoTextsService _Sys_AutoTextsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_AutoTextsController(ISys_AutoTextsService Sys_AutoTextsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_AutoTextsService, WebHostEnvironment)
    {
    _Sys_AutoTextsService = Sys_AutoTextsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

