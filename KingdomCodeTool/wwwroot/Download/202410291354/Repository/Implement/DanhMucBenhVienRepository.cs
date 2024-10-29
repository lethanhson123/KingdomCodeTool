namespace Repository.Implement
{
    public class DanhMucBenhVienRepository : BaseRepository<DanhMucBenhVien>
    , IDanhMucBenhVienRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucBenhVienRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

