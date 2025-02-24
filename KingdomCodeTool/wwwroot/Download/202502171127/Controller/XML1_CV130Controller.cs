namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML1_CV130Controller : BaseController<XML1_CV130, IXML1_CV130Service>
    {
    private readonly IXML1_CV130Service _XML1_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML1_CV130Controller(IXML1_CV130Service XML1_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML1_CV130Service, WebHostEnvironment)
    {
    _XML1_CV130Service = XML1_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

