namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CustomerWishlistController : BaseController<CustomerWishlist, ICustomerWishlistBusiness>
    {
    private readonly ICustomerWishlistBusiness _CustomerWishlistBusiness;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CustomerWishlistController(ICustomerWishlistBusiness CustomerWishlistBusiness, IWebHostEnvironment WebHostEnvironment) : base(CustomerWishlistBusiness, WebHostEnvironment)
    {
    _CustomerWishlistBusiness = CustomerWishlistBusiness;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

