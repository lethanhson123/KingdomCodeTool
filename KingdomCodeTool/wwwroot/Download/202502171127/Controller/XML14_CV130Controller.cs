namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML14_CV130Controller : BaseController<XML14_CV130, IXML14_CV130Service>
    {
    private readonly IXML14_CV130Service _XML14_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML14_CV130Controller(IXML14_CV130Service XML14_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML14_CV130Service, WebHostEnvironment)
    {
    _XML14_CV130Service = XML14_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

