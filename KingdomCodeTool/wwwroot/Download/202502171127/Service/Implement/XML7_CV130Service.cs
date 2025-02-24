namespace Service_eHospital_DongNai_A.Implement
{
    public class XML7_CV130Service : BaseService<XML7_CV130, IXML7_CV130Repository>
    , IXML7_CV130Service
    {
    private readonly IXML7_CV130Repository _XML7_CV130Repository;
    public XML7_CV130Service(IXML7_CV130Repository XML7_CV130Repository) : base(XML7_CV130Repository)
    {
    _XML7_CV130Repository = XML7_CV130Repository;
    }
    }
    }

