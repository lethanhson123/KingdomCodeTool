namespace Repository.Implement
{
    public class CongViecRepository : BaseRepository<CongViec>
    , ICongViecRepository
    {
    private readonly Data.Context.Context _context;
    public CongViecRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

