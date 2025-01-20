namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class idxController : BaseController<idx, IidxService>
    {
    private readonly IidxService _idxService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public idxController(IidxService idxService, IWebHostEnvironment WebHostEnvironment) : base(idxService, WebHostEnvironment)
    {
    _idxService = idxService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

