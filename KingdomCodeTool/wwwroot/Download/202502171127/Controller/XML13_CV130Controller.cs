namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML13_CV130Controller : BaseController<XML13_CV130, IXML13_CV130Service>
    {
    private readonly IXML13_CV130Service _XML13_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML13_CV130Controller(IXML13_CV130Service XML13_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML13_CV130Service, WebHostEnvironment)
    {
    _XML13_CV130Service = XML13_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

