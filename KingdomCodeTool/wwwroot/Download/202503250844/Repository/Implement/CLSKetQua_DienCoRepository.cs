namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_DienCoRepository : BaseRepository<CLSKetQua_DienCo>
    , ICLSKetQua_DienCoRepository
    {
    private readonly Context _context;
    public CLSKetQua_DienCoRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

