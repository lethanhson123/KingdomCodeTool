namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_LanguagesController : BaseController<Sys_Languages, ISys_LanguagesService>
    {
    private readonly ISys_LanguagesService _Sys_LanguagesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_LanguagesController(ISys_LanguagesService Sys_LanguagesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_LanguagesService, WebHostEnvironment)
    {
    _Sys_LanguagesService = Sys_LanguagesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

