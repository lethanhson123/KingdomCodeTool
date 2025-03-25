namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSYeuCauChiTietController : BaseController<CLSYeuCauChiTiet, ICLSYeuCauChiTietService>
    {
    private readonly ICLSYeuCauChiTietService _CLSYeuCauChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSYeuCauChiTietController(ICLSYeuCauChiTietService CLSYeuCauChiTietService, IWebHostEnvironment WebHostEnvironment) : base(CLSYeuCauChiTietService, WebHostEnvironment)
    {
    _CLSYeuCauChiTietService = CLSYeuCauChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

