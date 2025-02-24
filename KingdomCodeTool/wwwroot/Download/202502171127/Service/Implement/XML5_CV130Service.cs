namespace Service_eHospital_DongNai_A.Implement
{
    public class XML5_CV130Service : BaseService<XML5_CV130, IXML5_CV130Repository>
    , IXML5_CV130Service
    {
    private readonly IXML5_CV130Repository _XML5_CV130Repository;
    public XML5_CV130Service(IXML5_CV130Repository XML5_CV130Repository) : base(XML5_CV130Repository)
    {
    _XML5_CV130Repository = XML5_CV130Repository;
    }
    }
    }

