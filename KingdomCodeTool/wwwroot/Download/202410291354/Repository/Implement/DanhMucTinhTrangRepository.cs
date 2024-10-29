namespace Repository.Implement
{
    public class DanhMucTinhTrangRepository : BaseRepository<DanhMucTinhTrang>
    , IDanhMucTinhTrangRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucTinhTrangRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

