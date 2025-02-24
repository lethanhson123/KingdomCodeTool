namespace API_eHospital_DongNai_A.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class XML10_CV130Controller : BaseController<XML10_CV130, IXML10_CV130Service>
    {
    private readonly IXML10_CV130Service _XML10_CV130Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public XML10_CV130Controller(IXML10_CV130Service XML10_CV130Service, IWebHostEnvironment WebHostEnvironment) : base(XML10_CV130Service, WebHostEnvironment)
    {
    _XML10_CV130Service = XML10_CV130Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

