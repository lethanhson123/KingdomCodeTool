namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class KhamBenh_SinhHieuController : BaseController<KhamBenh_SinhHieu, IKhamBenh_SinhHieuService>
    {
    private readonly IKhamBenh_SinhHieuService _KhamBenh_SinhHieuService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public KhamBenh_SinhHieuController(IKhamBenh_SinhHieuService KhamBenh_SinhHieuService, IWebHostEnvironment WebHostEnvironment) : base(KhamBenh_SinhHieuService, WebHostEnvironment)
    {
    _KhamBenh_SinhHieuService = KhamBenh_SinhHieuService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

