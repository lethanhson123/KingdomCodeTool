namespace Repository.Implement
{
    public class DM_BenhNhanRepository : BaseRepository<DM_BenhNhan>
    , IDM_BenhNhanRepository
    {
    private readonly Data.Context.Context _context;
    public DM_BenhNhanRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

