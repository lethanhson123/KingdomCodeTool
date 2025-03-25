namespace Repository_eHospital_DongNai_A.Implement
{
    public class HoaDonChiTietRepository : BaseRepository<HoaDonChiTiet>
    , IHoaDonChiTietRepository
    {
    private readonly Context _context;
    public HoaDonChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

