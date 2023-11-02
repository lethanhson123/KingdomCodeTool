namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CustomerCategoryPriceController : BaseController<CustomerCategoryPrice, ICustomerCategoryPriceBusiness>
    {
    private readonly ICustomerCategoryPriceBusiness _CustomerCategoryPriceBusiness;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CustomerCategoryPriceController(ICustomerCategoryPriceBusiness CustomerCategoryPriceBusiness, IWebHostEnvironment WebHostEnvironment) : base(CustomerCategoryPriceBusiness, WebHostEnvironment)
    {
    _CustomerCategoryPriceBusiness = CustomerCategoryPriceBusiness;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

