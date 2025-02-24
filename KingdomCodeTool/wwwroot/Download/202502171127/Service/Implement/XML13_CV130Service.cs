namespace Service_eHospital_DongNai_A.Implement
{
    public class XML13_CV130Service : BaseService<XML13_CV130, IXML13_CV130Repository>
    , IXML13_CV130Service
    {
    private readonly IXML13_CV130Repository _XML13_CV130Repository;
    public XML13_CV130Service(IXML13_CV130Repository XML13_CV130Repository) : base(XML13_CV130Repository)
    {
    _XML13_CV130Repository = XML13_CV130Repository;
    }
    }
    }

