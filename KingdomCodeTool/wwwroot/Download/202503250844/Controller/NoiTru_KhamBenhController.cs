namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NoiTru_KhamBenhController : BaseController<NoiTru_KhamBenh, INoiTru_KhamBenhService>
    {
    private readonly INoiTru_KhamBenhService _NoiTru_KhamBenhService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NoiTru_KhamBenhController(INoiTru_KhamBenhService NoiTru_KhamBenhService, IWebHostEnvironment WebHostEnvironment) : base(NoiTru_KhamBenhService, WebHostEnvironment)
    {
    _NoiTru_KhamBenhService = NoiTru_KhamBenhService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

