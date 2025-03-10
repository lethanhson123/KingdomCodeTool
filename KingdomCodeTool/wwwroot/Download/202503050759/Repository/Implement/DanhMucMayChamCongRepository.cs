namespace Repository.Implement
{
    public class DanhMucMayChamCongRepository : BaseRepository<DanhMucMayChamCong>
    , IDanhMucMayChamCongRepository
    {
    private readonly Context _context;
    public DanhMucMayChamCongRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

