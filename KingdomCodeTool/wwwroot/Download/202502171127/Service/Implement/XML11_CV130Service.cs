namespace Service_eHospital_DongNai_A.Implement
{
    public class XML11_CV130Service : BaseService<XML11_CV130, IXML11_CV130Repository>
    , IXML11_CV130Service
    {
    private readonly IXML11_CV130Repository _XML11_CV130Repository;
    public XML11_CV130Service(IXML11_CV130Repository XML11_CV130Repository) : base(XML11_CV130Repository)
    {
    _XML11_CV130Repository = XML11_CV130Repository;
    }
    }
    }

