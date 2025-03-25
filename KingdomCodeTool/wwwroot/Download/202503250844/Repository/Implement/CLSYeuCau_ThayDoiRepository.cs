namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_ThayDoiRepository : BaseRepository<CLSYeuCau_ThayDoi>
    , ICLSYeuCau_ThayDoiRepository
    {
    private readonly Context _context;
    public CLSYeuCau_ThayDoiRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

