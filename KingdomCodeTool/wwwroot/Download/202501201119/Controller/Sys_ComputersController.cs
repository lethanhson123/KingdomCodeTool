namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ComputersController : BaseController<Sys_Computers, ISys_ComputersService>
    {
    private readonly ISys_ComputersService _Sys_ComputersService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ComputersController(ISys_ComputersService Sys_ComputersService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ComputersService, WebHostEnvironment)
    {
    _Sys_ComputersService = Sys_ComputersService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

