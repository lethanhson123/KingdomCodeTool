namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucBenhVienController : BaseController<DanhMucBenhVien, IDanhMucBenhVienService>
    {
    private readonly IDanhMucBenhVienService _DanhMucBenhVienService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucBenhVienController(IDanhMucBenhVienService DanhMucBenhVienService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucBenhVienService, WebHostEnvironment)
    {
    _DanhMucBenhVienService = DanhMucBenhVienService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

