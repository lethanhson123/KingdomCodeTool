namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_SiteDatabaseConnectionsController : BaseController<Sys_SiteDatabaseConnections, ISys_SiteDatabaseConnectionsService>
    {
    private readonly ISys_SiteDatabaseConnectionsService _Sys_SiteDatabaseConnectionsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_SiteDatabaseConnectionsController(ISys_SiteDatabaseConnectionsService Sys_SiteDatabaseConnectionsService, IWebHostEnvironment WebHostEnvironment) : base(Sys_SiteDatabaseConnectionsService, WebHostEnvironment)
    {
    _Sys_SiteDatabaseConnectionsService = Sys_SiteDatabaseConnectionsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

