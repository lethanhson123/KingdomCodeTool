namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class KhamBenh_VaoVien_SanKhoaController : BaseController<KhamBenh_VaoVien_SanKhoa, IKhamBenh_VaoVien_SanKhoaService>
    {
    private readonly IKhamBenh_VaoVien_SanKhoaService _KhamBenh_VaoVien_SanKhoaService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public KhamBenh_VaoVien_SanKhoaController(IKhamBenh_VaoVien_SanKhoaService KhamBenh_VaoVien_SanKhoaService, IWebHostEnvironment WebHostEnvironment) : base(KhamBenh_VaoVien_SanKhoaService, WebHostEnvironment)
    {
    _KhamBenh_VaoVien_SanKhoaService = KhamBenh_VaoVien_SanKhoaService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

