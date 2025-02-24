namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML13_CV130Repository : BaseRepository<XML13_CV130>
    , IXML13_CV130Repository
    {
    private readonly Context _context;
    public XML13_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

