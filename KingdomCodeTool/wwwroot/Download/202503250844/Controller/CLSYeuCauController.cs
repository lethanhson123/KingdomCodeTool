namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSYeuCauController : BaseController<CLSYeuCau, ICLSYeuCauService>
    {
    private readonly ICLSYeuCauService _CLSYeuCauService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSYeuCauController(ICLSYeuCauService CLSYeuCauService, IWebHostEnvironment WebHostEnvironment) : base(CLSYeuCauService, WebHostEnvironment)
    {
    _CLSYeuCauService = CLSYeuCauService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

