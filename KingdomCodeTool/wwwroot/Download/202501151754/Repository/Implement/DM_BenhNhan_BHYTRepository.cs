namespace Repository.Implement
{
    public class DM_BenhNhan_BHYTRepository : BaseRepository<DM_BenhNhan_BHYT>
    , IDM_BenhNhan_BHYTRepository
    {
    private readonly Data.Context.Context _context;
    public DM_BenhNhan_BHYTRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

