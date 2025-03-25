namespace Repository_eHospital_DongNai_A.Implement
{
    public class BenhAnChiTietRepository : BaseRepository<BenhAnChiTiet>
    , IBenhAnChiTietRepository
    {
    private readonly Context _context;
    public BenhAnChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

