namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML3_CV130Repository : BaseRepository<XML3_CV130>
    , IXML3_CV130Repository
    {
    private readonly Context _context;
    public XML3_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

