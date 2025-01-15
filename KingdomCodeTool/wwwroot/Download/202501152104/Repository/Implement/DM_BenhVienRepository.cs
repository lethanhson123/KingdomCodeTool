namespace Repository.Implement
{
    public class DM_BenhVienRepository : BaseRepository<DM_BenhVien>
    , IDM_BenhVienRepository
    {
    private readonly Context _context;
    public DM_BenhVienRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

