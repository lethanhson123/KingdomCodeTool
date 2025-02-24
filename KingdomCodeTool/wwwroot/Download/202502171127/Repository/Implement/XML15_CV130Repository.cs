namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML15_CV130Repository : BaseRepository<XML15_CV130>
    , IXML15_CV130Repository
    {
    private readonly Context _context;
    public XML15_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

