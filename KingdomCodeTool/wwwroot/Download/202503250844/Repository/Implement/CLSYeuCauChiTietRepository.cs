namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSYeuCauChiTietRepository : BaseRepository<CLSYeuCauChiTiet>
    , ICLSYeuCauChiTietRepository
    {
    private readonly Context _context;
    public CLSYeuCauChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

