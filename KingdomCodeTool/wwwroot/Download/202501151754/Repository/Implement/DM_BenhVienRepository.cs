namespace Repository.Implement
{
    public class DM_BenhVienRepository : BaseRepository<DM_BenhVien>
    , IDM_BenhVienRepository
    {
    private readonly Data.Context.Context _context;
    public DM_BenhVienRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

