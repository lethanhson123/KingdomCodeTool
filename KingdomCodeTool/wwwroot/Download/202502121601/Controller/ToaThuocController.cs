namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ToaThuocController : BaseController<ToaThuoc, IToaThuocService>
    {
    private readonly IToaThuocService _ToaThuocService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ToaThuocController(IToaThuocService ToaThuocService, IWebHostEnvironment WebHostEnvironment) : base(ToaThuocService, WebHostEnvironment)
    {
    _ToaThuocService = ToaThuocService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

