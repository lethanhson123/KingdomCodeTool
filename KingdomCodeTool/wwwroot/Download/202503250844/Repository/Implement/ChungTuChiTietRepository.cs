namespace Repository_eHospital_DongNai_A.Implement
{
    public class ChungTuChiTietRepository : BaseRepository<ChungTuChiTiet>
    , IChungTuChiTietRepository
    {
    private readonly Context _context;
    public ChungTuChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

