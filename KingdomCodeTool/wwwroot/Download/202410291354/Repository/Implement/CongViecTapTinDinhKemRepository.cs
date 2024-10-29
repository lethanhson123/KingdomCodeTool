namespace Repository.Implement
{
    public class CongViecTapTinDinhKemRepository : BaseRepository<CongViecTapTinDinhKem>
    , ICongViecTapTinDinhKemRepository
    {
    private readonly Data.Context.Context _context;
    public CongViecTapTinDinhKemRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

