namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaChiTietRepository : BaseRepository<CLSKetQuaChiTiet>
    , ICLSKetQuaChiTietRepository
    {
    private readonly Context _context;
    public CLSKetQuaChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

