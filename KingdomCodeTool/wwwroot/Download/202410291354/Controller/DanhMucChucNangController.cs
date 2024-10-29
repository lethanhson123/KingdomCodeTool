namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucChucNangController : BaseController<DanhMucChucNang, IDanhMucChucNangService>
    {
    private readonly IDanhMucChucNangService _DanhMucChucNangService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucChucNangController(IDanhMucChucNangService DanhMucChucNangService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucChucNangService, WebHostEnvironment)
    {
    _DanhMucChucNangService = DanhMucChucNangService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

