namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML12_CV130Repository : BaseRepository<XML12_CV130>
    , IXML12_CV130Repository
    {
    private readonly Context _context;
    public XML12_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

