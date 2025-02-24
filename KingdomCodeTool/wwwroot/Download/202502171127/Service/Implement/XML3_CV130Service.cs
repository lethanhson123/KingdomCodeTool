namespace Service_eHospital_DongNai_A.Implement
{
    public class XML3_CV130Service : BaseService<XML3_CV130, IXML3_CV130Repository>
    , IXML3_CV130Service
    {
    private readonly IXML3_CV130Repository _XML3_CV130Repository;
    public XML3_CV130Service(IXML3_CV130Repository XML3_CV130Repository) : base(XML3_CV130Repository)
    {
    _XML3_CV130Repository = XML3_CV130Repository;
    }
    }
    }

