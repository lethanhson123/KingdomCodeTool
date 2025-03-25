namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class BenhAnChiTietController : BaseController<BenhAnChiTiet, IBenhAnChiTietService>
    {
    private readonly IBenhAnChiTietService _BenhAnChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public BenhAnChiTietController(IBenhAnChiTietService BenhAnChiTietService, IWebHostEnvironment WebHostEnvironment) : base(BenhAnChiTietService, WebHostEnvironment)
    {
    _BenhAnChiTietService = BenhAnChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

