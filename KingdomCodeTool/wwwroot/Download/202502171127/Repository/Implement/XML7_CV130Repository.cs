namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML7_CV130Repository : BaseRepository<XML7_CV130>
    , IXML7_CV130Repository
    {
    private readonly Context _context;
    public XML7_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

