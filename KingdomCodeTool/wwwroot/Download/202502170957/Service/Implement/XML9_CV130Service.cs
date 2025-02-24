namespace Service_eHospital_DongNai_A.Implement
{
    public class XML9_CV130Service : BaseService<XML9_CV130, IXML9_CV130Repository>
    , IXML9_CV130Service
    {
    private readonly IXML9_CV130Repository _XML9_CV130Repository;
    public XML9_CV130Service(IXML9_CV130Repository XML9_CV130Repository) : base(XML9_CV130Repository)
    {
    _XML9_CV130Repository = XML9_CV130Repository;
    }
    }
    }

