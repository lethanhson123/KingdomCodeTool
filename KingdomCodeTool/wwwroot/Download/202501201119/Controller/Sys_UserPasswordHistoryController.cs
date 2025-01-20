namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_UserPasswordHistoryController : BaseController<Sys_UserPasswordHistory, ISys_UserPasswordHistoryService>
    {
    private readonly ISys_UserPasswordHistoryService _Sys_UserPasswordHistoryService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_UserPasswordHistoryController(ISys_UserPasswordHistoryService Sys_UserPasswordHistoryService, IWebHostEnvironment WebHostEnvironment) : base(Sys_UserPasswordHistoryService, WebHostEnvironment)
    {
    _Sys_UserPasswordHistoryService = Sys_UserPasswordHistoryService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

