namespace Service_eHospital_DongNai_A.Implement
{
    public class XML6_CV130Service : BaseService<XML6_CV130, IXML6_CV130Repository>
    , IXML6_CV130Service
    {
    private readonly IXML6_CV130Repository _XML6_CV130Repository;
    public XML6_CV130Service(IXML6_CV130Repository XML6_CV130Repository) : base(XML6_CV130Repository)
    {
    _XML6_CV130Repository = XML6_CV130Repository;
    }
    }
    }

