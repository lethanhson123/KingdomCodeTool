namespace Repository.Implement
{
    public class DanhMucPhongBanRepository : BaseRepository<DanhMucPhongBan>
    , IDanhMucPhongBanRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucPhongBanRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

