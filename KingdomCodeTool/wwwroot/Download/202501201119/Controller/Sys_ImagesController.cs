namespace API_eHospital_DongNai_A_System.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class Sys_ImagesController : BaseController<Sys_Images, ISys_ImagesService>
    {
    private readonly ISys_ImagesService _Sys_ImagesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public Sys_ImagesController(ISys_ImagesService Sys_ImagesService, IWebHostEnvironment WebHostEnvironment) : base(Sys_ImagesService, WebHostEnvironment)
    {
    _Sys_ImagesService = Sys_ImagesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

