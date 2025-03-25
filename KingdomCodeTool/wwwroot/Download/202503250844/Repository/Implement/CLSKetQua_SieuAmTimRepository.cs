namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_SieuAmTimRepository : BaseRepository<CLSKetQua_SieuAmTim>
    , ICLSKetQua_SieuAmTimRepository
    {
    private readonly Context _context;
    public CLSKetQua_SieuAmTimRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

