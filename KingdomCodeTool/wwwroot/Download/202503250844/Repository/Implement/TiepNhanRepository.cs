namespace Repository_eHospital_DongNai_A.Implement
{
    public class TiepNhanRepository : BaseRepository<TiepNhan>
    , ITiepNhanRepository
    {
    private readonly Context _context;
    public TiepNhanRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

