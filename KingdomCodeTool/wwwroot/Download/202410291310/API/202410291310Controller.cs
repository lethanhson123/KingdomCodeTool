namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class 202410291310Controller : BaseController<202410291310, I202410291310Service>
    {
    private readonly I202410291310Service _202410291310Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public 202410291310Controller(I202410291310Service 202410291310Service, IWebHostEnvironment WebHostEnvironment) : base(202410291310Service, WebHostEnvironment)
    {
    _202410291310Service = 202410291310Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

