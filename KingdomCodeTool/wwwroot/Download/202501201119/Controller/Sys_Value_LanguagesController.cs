namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_Value_LanguagesController : BaseController<Sys_Value_Languages, ISys_Value_LanguagesService>
    {
    private readonly ISys_Value_LanguagesService _Sys_Value_LanguagesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_Value_LanguagesController(ISys_Value_LanguagesService Sys_Value_LanguagesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_Value_LanguagesService, WebHostEnvironment)
    {
    _Sys_Value_LanguagesService = Sys_Value_LanguagesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

