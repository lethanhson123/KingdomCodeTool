namespace Repository_eHospital_DongNai_A.Implement
{
    public class BenhAnRepository : BaseRepository<BenhAn>
    , IBenhAnRepository
    {
    private readonly Context _context;
    public BenhAnRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

