namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class T_FK_XrefController : BaseController<T_FK_Xref, IT_FK_XrefService>
    {
    private readonly IT_FK_XrefService _T_FK_XrefService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public T_FK_XrefController(IT_FK_XrefService T_FK_XrefService, IWebHostEnvironment WebHostEnvironment) : base(T_FK_XrefService, WebHostEnvironment)
    {
    _T_FK_XrefService = T_FK_XrefService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

