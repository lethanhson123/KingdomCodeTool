namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucDonViTinhController : BaseController<DanhMucDonViTinh, IDanhMucDonViTinhService>
    {
    private readonly IDanhMucDonViTinhService _DanhMucDonViTinhService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucDonViTinhController(IDanhMucDonViTinhService DanhMucDonViTinhService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucDonViTinhService, WebHostEnvironment)
    {
    _DanhMucDonViTinhService = DanhMucDonViTinhService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

