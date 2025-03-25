namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSKetQuaController : BaseController<CLSKetQua, ICLSKetQuaService>
    {
    private readonly ICLSKetQuaService _CLSKetQuaService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSKetQuaController(ICLSKetQuaService CLSKetQuaService, IWebHostEnvironment WebHostEnvironment) : base(CLSKetQuaService, WebHostEnvironment)
    {
    _CLSKetQuaService = CLSKetQuaService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

