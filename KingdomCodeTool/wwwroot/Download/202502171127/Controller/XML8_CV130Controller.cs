namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML8_CV130Controller : BaseController<XML8_CV130, IXML8_CV130Service>
    {
    private readonly IXML8_CV130Service _XML8_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML8_CV130Controller(IXML8_CV130Service XML8_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML8_CV130Service, WebHostEnvironment)
    {
    _XML8_CV130Service = XML8_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

