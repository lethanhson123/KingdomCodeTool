namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NoiTru_LuuTruController : BaseController<NoiTru_LuuTru, INoiTru_LuuTruService>
    {
    private readonly INoiTru_LuuTruService _NoiTru_LuuTruService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public NoiTru_LuuTruController(INoiTru_LuuTruService NoiTru_LuuTruService, IWebHostEnvironment WebHostEnvironment) : base(NoiTru_LuuTruService, WebHostEnvironment)
    {
    _NoiTru_LuuTruService = NoiTru_LuuTruService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

