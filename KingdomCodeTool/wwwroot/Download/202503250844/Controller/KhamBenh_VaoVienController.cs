namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class KhamBenh_VaoVienController : BaseController<KhamBenh_VaoVien, IKhamBenh_VaoVienService>
    {
    private readonly IKhamBenh_VaoVienService _KhamBenh_VaoVienService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public KhamBenh_VaoVienController(IKhamBenh_VaoVienService KhamBenh_VaoVienService, IWebHostEnvironment WebHostEnvironment) : base(KhamBenh_VaoVienService, WebHostEnvironment)
    {
    _KhamBenh_VaoVienService = KhamBenh_VaoVienService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

