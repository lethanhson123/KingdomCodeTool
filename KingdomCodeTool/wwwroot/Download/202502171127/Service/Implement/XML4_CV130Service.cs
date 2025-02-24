namespace Service_eHospital_DongNai_A.Implement
{
    public class XML4_CV130Service : BaseService<XML4_CV130, IXML4_CV130Repository>
    , IXML4_CV130Service
    {
    private readonly IXML4_CV130Repository _XML4_CV130Repository;
    public XML4_CV130Service(IXML4_CV130Repository XML4_CV130Repository) : base(XML4_CV130Repository)
    {
    _XML4_CV130Repository = XML4_CV130Repository;
    }
    }
    }

