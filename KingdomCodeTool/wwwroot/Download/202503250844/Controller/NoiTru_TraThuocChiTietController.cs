namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NoiTru_TraThuocChiTietController : BaseController<NoiTru_TraThuocChiTiet, INoiTru_TraThuocChiTietService>
    {
    private readonly INoiTru_TraThuocChiTietService _NoiTru_TraThuocChiTietService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NoiTru_TraThuocChiTietController(INoiTru_TraThuocChiTietService NoiTru_TraThuocChiTietService, IWebHostEnvironment WebHostEnvironment) : base(NoiTru_TraThuocChiTietService, WebHostEnvironment)
    {
    _NoiTru_TraThuocChiTietService = NoiTru_TraThuocChiTietService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

