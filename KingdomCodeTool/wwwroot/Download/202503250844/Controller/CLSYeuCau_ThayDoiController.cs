namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSYeuCau_ThayDoiController : BaseController<CLSYeuCau_ThayDoi, ICLSYeuCau_ThayDoiService>
    {
    private readonly ICLSYeuCau_ThayDoiService _CLSYeuCau_ThayDoiService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSYeuCau_ThayDoiController(ICLSYeuCau_ThayDoiService CLSYeuCau_ThayDoiService, IWebHostEnvironment WebHostEnvironment) : base(CLSYeuCau_ThayDoiService, WebHostEnvironment)
    {
    _CLSYeuCau_ThayDoiService = CLSYeuCau_ThayDoiService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

