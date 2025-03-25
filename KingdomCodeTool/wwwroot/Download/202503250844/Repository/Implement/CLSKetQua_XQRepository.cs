namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_XQRepository : BaseRepository<CLSKetQua_XQ>
    , ICLSKetQua_XQRepository
    {
    private readonly Context _context;
    public CLSKetQua_XQRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

