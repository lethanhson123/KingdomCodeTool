namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML2_CV130Repository : BaseRepository<XML2_CV130>
    , IXML2_CV130Repository
    {
    private readonly Context _context;
    public XML2_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

