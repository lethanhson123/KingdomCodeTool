namespace Service_eHospital_DongNai_A.Implement
{
    public class XML8_CV130Service : BaseService<XML8_CV130, IXML8_CV130Repository>
    , IXML8_CV130Service
    {
    private readonly IXML8_CV130Repository _XML8_CV130Repository;
    public XML8_CV130Service(IXML8_CV130Repository XML8_CV130Repository) : base(XML8_CV130Repository)
    {
    _XML8_CV130Repository = XML8_CV130Repository;
    }
    }
    }

