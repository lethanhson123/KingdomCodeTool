namespace Repository_eHospital_DongNai_A.Implement
{
    public class XML11_CV130Repository : BaseRepository<XML11_CV130>
    , IXML11_CV130Repository
    {
    private readonly Context _context;
    public XML11_CV130Repository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

