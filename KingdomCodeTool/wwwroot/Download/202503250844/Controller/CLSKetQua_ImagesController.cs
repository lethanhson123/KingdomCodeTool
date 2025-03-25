namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CLSKetQua_ImagesController : BaseController<CLSKetQua_Images, ICLSKetQua_ImagesService>
    {
    private readonly ICLSKetQua_ImagesService _CLSKetQua_ImagesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CLSKetQua_ImagesController(ICLSKetQua_ImagesService CLSKetQua_ImagesService, IWebHostEnvironment WebHostEnvironment) : base(CLSKetQua_ImagesService, WebHostEnvironment)
    {
    _CLSKetQua_ImagesService = CLSKetQua_ImagesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

