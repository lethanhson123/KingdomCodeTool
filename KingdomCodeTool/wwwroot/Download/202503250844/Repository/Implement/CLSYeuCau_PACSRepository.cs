namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_PACSRepository : BaseRepository<CLSYeuCau_PACS>
    , ICLSYeuCau_PACSRepository
    {
    private readonly Context _context;
    public CLSYeuCau_PACSRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

