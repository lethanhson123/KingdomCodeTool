namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DeliveryController : BaseController<Delivery, IDeliveryBusiness>
    {
    private readonly IDeliveryBusiness _DeliveryBusiness;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DeliveryController(IDeliveryBusiness DeliveryBusiness, IWebHostEnvironment WebHostEnvironment) : base(DeliveryBusiness, WebHostEnvironment)
    {
    _DeliveryBusiness = DeliveryBusiness;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

