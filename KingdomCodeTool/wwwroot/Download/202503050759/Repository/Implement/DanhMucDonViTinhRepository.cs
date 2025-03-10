namespace Repository.Implement
{
    public class DanhMucDonViTinhRepository : BaseRepository<DanhMucDonViTinh>
    , IDanhMucDonViTinhRepository
    {
    private readonly Context _context;
    public DanhMucDonViTinhRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

