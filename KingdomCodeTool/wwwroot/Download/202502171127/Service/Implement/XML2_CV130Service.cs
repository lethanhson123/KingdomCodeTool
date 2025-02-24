namespace Service_eHospital_DongNai_A.Implement
{
    public class XML2_CV130Service : BaseService<XML2_CV130, IXML2_CV130Repository>
    , IXML2_CV130Service
    {
    private readonly IXML2_CV130Repository _XML2_CV130Repository;
    public XML2_CV130Service(IXML2_CV130Repository XML2_CV130Repository) : base(XML2_CV130Repository)
    {
    _XML2_CV130Repository = XML2_CV130Repository;
    }
    }
    }

