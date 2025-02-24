namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML11_CV130Controller : BaseController<XML11_CV130, IXML11_CV130Service>
    {
    private readonly IXML11_CV130Service _XML11_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML11_CV130Controller(IXML11_CV130Service XML11_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML11_CV130Service, WebHostEnvironment)
    {
    _XML11_CV130Service = XML11_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

