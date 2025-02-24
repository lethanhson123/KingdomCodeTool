namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML10_CV130Repository : BaseRepository<XML10_CV130>
    , IXML10_CV130Repository
    {
    private readonly Context _context;
    public XML10_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

