namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML6_CV130Controller : BaseController<XML6_CV130, IXML6_CV130Service>
    {
    private readonly IXML6_CV130Service _XML6_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML6_CV130Controller(IXML6_CV130Service XML6_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML6_CV130Service, WebHostEnvironment)
    {
    _XML6_CV130Service = XML6_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

