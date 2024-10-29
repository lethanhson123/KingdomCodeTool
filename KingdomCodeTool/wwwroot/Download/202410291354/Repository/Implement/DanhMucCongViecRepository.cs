namespace Repository.Implement
{
    public class DanhMucCongViecRepository : BaseRepository<DanhMucCongViec>
    , IDanhMucCongViecRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucCongViecRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

