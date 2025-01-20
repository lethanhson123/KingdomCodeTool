namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_Control_DetailsController : BaseController<Sys_Control_Details, ISys_Control_DetailsService>
    {
    private readonly ISys_Control_DetailsService _Sys_Control_DetailsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_Control_DetailsController(ISys_Control_DetailsService Sys_Control_DetailsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_Control_DetailsService, WebHostEnvironment)
    {
    _Sys_Control_DetailsService = Sys_Control_DetailsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

