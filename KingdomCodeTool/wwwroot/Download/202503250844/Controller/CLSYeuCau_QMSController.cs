namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSYeuCau_QMSController : BaseController<CLSYeuCau_QMS, ICLSYeuCau_QMSService>
    {
    private readonly ICLSYeuCau_QMSService _CLSYeuCau_QMSService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSYeuCau_QMSController(ICLSYeuCau_QMSService CLSYeuCau_QMSService, IWebHostEnvironment WebHostEnvironment) : base(CLSYeuCau_QMSService, WebHostEnvironment)
    {
    _CLSYeuCau_QMSService = CLSYeuCau_QMSService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

