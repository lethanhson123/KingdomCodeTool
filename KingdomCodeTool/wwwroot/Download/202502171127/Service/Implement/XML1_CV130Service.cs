namespace Service_eHospital_DongNai_A.Implement
{
    public class XML1_CV130Service : BaseService<XML1_CV130, IXML1_CV130Repository>
    , IXML1_CV130Service
    {
    private readonly IXML1_CV130Repository _XML1_CV130Repository;
    public XML1_CV130Service(IXML1_CV130Repository XML1_CV130Repository) : base(XML1_CV130Repository)
    {
    _XML1_CV130Repository = XML1_CV130Repository;
    }
    }
    }

