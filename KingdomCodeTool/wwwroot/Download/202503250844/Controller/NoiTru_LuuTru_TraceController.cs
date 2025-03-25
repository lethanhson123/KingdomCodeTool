namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NoiTru_LuuTru_TraceController : BaseController<NoiTru_LuuTru_Trace, INoiTru_LuuTru_TraceService>
    {
    private readonly INoiTru_LuuTru_TraceService _NoiTru_LuuTru_TraceService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NoiTru_LuuTru_TraceController(INoiTru_LuuTru_TraceService NoiTru_LuuTru_TraceService, IWebHostEnvironment WebHostEnvironment) : base(NoiTru_LuuTru_TraceService, WebHostEnvironment)
    {
    _NoiTru_LuuTru_TraceService = NoiTru_LuuTru_TraceService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

