namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML12_CV130Controller : BaseController<XML12_CV130, IXML12_CV130Service>
    {
    private readonly IXML12_CV130Service _XML12_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML12_CV130Controller(IXML12_CV130Service XML12_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML12_CV130Service, WebHostEnvironment)
    {
    _XML12_CV130Service = XML12_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

