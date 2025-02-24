namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML14_CV130Repository : BaseRepository<XML14_CV130>
    , IXML14_CV130Repository
    {
    private readonly Context _context;
    public XML14_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

