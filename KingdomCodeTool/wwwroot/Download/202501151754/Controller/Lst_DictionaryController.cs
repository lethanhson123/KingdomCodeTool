namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Lst_DictionaryController : BaseController<Lst_Dictionary, ILst_DictionaryService>
    {
    private readonly ILst_DictionaryService _Lst_DictionaryService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Lst_DictionaryController(ILst_DictionaryService Lst_DictionaryService, IWebHostEnvironment WebHostEnvironment) : base(Lst_DictionaryService, WebHostEnvironment)
    {
    _Lst_DictionaryService = Lst_DictionaryService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

