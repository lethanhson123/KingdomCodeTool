namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_DataTypesController : BaseController<Sys_DataTypes, ISys_DataTypesService>
    {
    private readonly ISys_DataTypesService _Sys_DataTypesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_DataTypesController(ISys_DataTypesService Sys_DataTypesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_DataTypesService, WebHostEnvironment)
    {
    _Sys_DataTypesService = Sys_DataTypesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

