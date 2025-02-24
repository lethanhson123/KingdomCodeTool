namespace Service_eHospital_DongNai_A.Implement
{
    public class XML14_CV130Service : BaseService<XML14_CV130, IXML14_CV130Repository>
    , IXML14_CV130Service
    {
    private readonly IXML14_CV130Repository _XML14_CV130Repository;
    public XML14_CV130Service(IXML14_CV130Repository XML14_CV130Repository) : base(XML14_CV130Repository)
    {
    _XML14_CV130Repository = XML14_CV130Repository;
    }
    }
    }

