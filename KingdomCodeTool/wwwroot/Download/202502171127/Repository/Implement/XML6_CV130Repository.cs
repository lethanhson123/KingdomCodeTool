namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML6_CV130Repository : BaseRepository<XML6_CV130>
    , IXML6_CV130Repository
    {
    private readonly Context _context;
    public XML6_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

