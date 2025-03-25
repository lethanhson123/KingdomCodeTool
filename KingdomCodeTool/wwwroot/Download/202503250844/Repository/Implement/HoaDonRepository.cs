namespace Repository_eHospital_DongNai_A.Implement
{
    public class HoaDonRepository : BaseRepository<HoaDon>
    , IHoaDonRepository
    {
    private readonly Context _context;
    public HoaDonRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

