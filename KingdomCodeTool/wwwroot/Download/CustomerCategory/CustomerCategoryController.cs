namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CustomerCategoryController : BaseController<CustomerCategory, ICustomerCategoryBusiness>
    {
    private readonly ICustomerCategoryBusiness _CustomerCategoryBusiness;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CustomerCategoryController(ICustomerCategoryBusiness CustomerCategoryBusiness, IWebHostEnvironment WebHostEnvironment) : base(CustomerCategoryBusiness, WebHostEnvironment)
    {
    _CustomerCategoryBusiness = CustomerCategoryBusiness;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

