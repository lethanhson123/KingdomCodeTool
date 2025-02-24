namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML8_CV130Repository : BaseRepository<XML8_CV130>
    , IXML8_CV130Repository
    {
    private readonly Context _context;
    public XML8_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

