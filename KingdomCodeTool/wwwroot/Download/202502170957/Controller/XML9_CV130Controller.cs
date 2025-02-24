namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML9_CV130Controller : BaseController<XML9_CV130, IXML9_CV130Service>
    {
    private readonly IXML9_CV130Service _XML9_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML9_CV130Controller(IXML9_CV130Service XML9_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML9_CV130Service, WebHostEnvironment)
    {
    _XML9_CV130Service = XML9_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

