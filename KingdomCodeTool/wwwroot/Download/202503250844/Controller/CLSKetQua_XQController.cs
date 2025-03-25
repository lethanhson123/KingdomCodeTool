namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSKetQua_XQController : BaseController<CLSKetQua_XQ, ICLSKetQua_XQService>
    {
    private readonly ICLSKetQua_XQService _CLSKetQua_XQService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSKetQua_XQController(ICLSKetQua_XQService CLSKetQua_XQService, IWebHostEnvironment WebHostEnvironment) : base(CLSKetQua_XQService, WebHostEnvironment)
    {
    _CLSKetQua_XQService = CLSKetQua_XQService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

