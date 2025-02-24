namespace Service_eHospital_DongNai_A.Implement
{
    public class XML10_CV130Service : BaseService<XML10_CV130, IXML10_CV130Repository>
    , IXML10_CV130Service
    {
    private readonly IXML10_CV130Repository _XML10_CV130Repository;
    public XML10_CV130Service(IXML10_CV130Repository XML10_CV130Repository) : base(XML10_CV130Repository)
    {
    _XML10_CV130Repository = XML10_CV130Repository;
    }
    }
    }

