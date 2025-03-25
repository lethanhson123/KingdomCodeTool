namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_QMSRepository : BaseRepository<CLSYeuCau_QMS>
    , ICLSYeuCau_QMSRepository
    {
    private readonly Context _context;
    public CLSYeuCau_QMSRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

