namespace Repository.Implement
{
    public class HRNhanVienTapTinDinhKemRepository : BaseRepository<HRNhanVienTapTinDinhKem>
    , IHRNhanVienTapTinDinhKemRepository
    {
    private readonly Context _context;
    public HRNhanVienTapTinDinhKemRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

