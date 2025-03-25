namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class KhamBenh_ToaThuocController : BaseController<KhamBenh_ToaThuoc, IKhamBenh_ToaThuocService>
    {
    private readonly IKhamBenh_ToaThuocService _KhamBenh_ToaThuocService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public KhamBenh_ToaThuocController(IKhamBenh_ToaThuocService KhamBenh_ToaThuocService, IWebHostEnvironment WebHostEnvironment) : base(KhamBenh_ToaThuocService, WebHostEnvironment)
    {
    _KhamBenh_ToaThuocService = KhamBenh_ToaThuocService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

