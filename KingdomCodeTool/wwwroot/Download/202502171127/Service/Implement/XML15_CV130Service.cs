namespace Service_eHospital_DongNai_A.Implement
{
    public class XML15_CV130Service : BaseService<XML15_CV130, IXML15_CV130Repository>
    , IXML15_CV130Service
    {
    private readonly IXML15_CV130Repository _XML15_CV130Repository;
    public XML15_CV130Service(IXML15_CV130Repository XML15_CV130Repository) : base(XML15_CV130Repository)
    {
    _XML15_CV130Repository = XML15_CV130Repository;
    }
    }
    }

