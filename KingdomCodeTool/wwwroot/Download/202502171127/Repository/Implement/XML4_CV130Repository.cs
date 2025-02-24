namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML4_CV130Repository : BaseRepository<XML4_CV130>
    , IXML4_CV130Repository
    {
    private readonly Context _context;
    public XML4_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

