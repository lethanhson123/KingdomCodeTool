namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyController : BaseController<Company, ICompanyBusiness>
    {
    private readonly ICompanyBusiness _CompanyBusiness;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyController(ICompanyBusiness CompanyBusiness, IWebHostEnvironment WebHostEnvironment) : base(CompanyBusiness, WebHostEnvironment)
    {
    _CompanyBusiness = CompanyBusiness;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

