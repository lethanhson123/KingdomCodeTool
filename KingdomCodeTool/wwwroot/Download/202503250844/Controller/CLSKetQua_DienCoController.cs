namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSKetQua_DienCoController : BaseController<CLSKetQua_DienCo, ICLSKetQua_DienCoService>
    {
    private readonly ICLSKetQua_DienCoService _CLSKetQua_DienCoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSKetQua_DienCoController(ICLSKetQua_DienCoService CLSKetQua_DienCoService, IWebHostEnvironment WebHostEnvironment) : base(CLSKetQua_DienCoService, WebHostEnvironment)
    {
    _CLSKetQua_DienCoService = CLSKetQua_DienCoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

