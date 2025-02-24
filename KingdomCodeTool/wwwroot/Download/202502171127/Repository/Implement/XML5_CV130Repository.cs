namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML5_CV130Repository : BaseRepository<XML5_CV130>
    , IXML5_CV130Repository
    {
    private readonly Context _context;
    public XML5_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

