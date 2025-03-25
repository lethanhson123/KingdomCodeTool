namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSYeuCauRepository : BaseRepository<CLSYeuCau>
    , ICLSYeuCauRepository
    {
    private readonly Context _context;
    public CLSYeuCauRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

