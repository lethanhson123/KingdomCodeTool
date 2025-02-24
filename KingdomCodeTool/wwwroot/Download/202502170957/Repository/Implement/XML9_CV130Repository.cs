namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML9_CV130Repository : BaseRepository<XML9_CV130>
    , IXML9_CV130Repository
    {
    private readonly Context _context;
    public XML9_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

