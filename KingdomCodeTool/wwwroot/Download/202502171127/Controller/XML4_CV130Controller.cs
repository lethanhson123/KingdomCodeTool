namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML4_CV130Controller : BaseController<XML4_CV130, IXML4_CV130Service>
    {
    private readonly IXML4_CV130Service _XML4_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML4_CV130Controller(IXML4_CV130Service XML4_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML4_CV130Service, WebHostEnvironment)
    {
    _XML4_CV130Service = XML4_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

