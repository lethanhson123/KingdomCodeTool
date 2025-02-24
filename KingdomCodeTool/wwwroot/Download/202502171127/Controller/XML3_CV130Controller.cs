namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML3_CV130Controller : BaseController<XML3_CV130, IXML3_CV130Service>
    {
    private readonly IXML3_CV130Service _XML3_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML3_CV130Controller(IXML3_CV130Service XML3_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML3_CV130Service, WebHostEnvironment)
    {
    _XML3_CV130Service = XML3_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

