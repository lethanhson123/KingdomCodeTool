namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_DomainsController : BaseController<Sys_Domains, ISys_DomainsService>
    {
    private readonly ISys_DomainsService _Sys_DomainsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_DomainsController(ISys_DomainsService Sys_DomainsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_DomainsService, WebHostEnvironment)
    {
    _Sys_DomainsService = Sys_DomainsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

