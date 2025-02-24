namespace Service_eHospital_DongNai_A.Implement
{
    public class XML12_CV130Service : BaseService<XML12_CV130, IXML12_CV130Repository>
    , IXML12_CV130Service
    {
    private readonly IXML12_CV130Repository _XML12_CV130Repository;
    public XML12_CV130Service(IXML12_CV130Repository XML12_CV130Repository) : base(XML12_CV130Repository)
    {
    _XML12_CV130Repository = XML12_CV130Repository;
    }
    }
    }

