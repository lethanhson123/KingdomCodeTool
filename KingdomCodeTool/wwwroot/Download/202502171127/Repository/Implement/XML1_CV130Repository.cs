namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML1_CV130Repository : BaseRepository<XML1_CV130>
    , IXML1_CV130Repository
    {
    private readonly Context _context;
    public XML1_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

