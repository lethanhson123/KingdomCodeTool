namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Lst_Dictionary_TypeController : BaseController<Lst_Dictionary_Type, ILst_Dictionary_TypeService>
    {
    private readonly ILst_Dictionary_TypeService _Lst_Dictionary_TypeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Lst_Dictionary_TypeController(ILst_Dictionary_TypeService Lst_Dictionary_TypeService, IWebHostEnvironment WebHostEnvironment) : base(Lst_Dictionary_TypeService, WebHostEnvironment)
    {
    _Lst_Dictionary_TypeService = Lst_Dictionary_TypeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

