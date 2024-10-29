namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ThanhVienChucNangController : BaseController<ThanhVienChucNang, IThanhVienChucNangService>
    {
    private readonly IThanhVienChucNangService _ThanhVienChucNangService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ThanhVienChucNangController(IThanhVienChucNangService ThanhVienChucNangService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienChucNangService, WebHostEnvironment)
    {
    _ThanhVienChucNangService = ThanhVienChucNangService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

