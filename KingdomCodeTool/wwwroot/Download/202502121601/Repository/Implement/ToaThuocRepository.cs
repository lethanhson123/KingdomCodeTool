namespace Repository_eHospital_DongNai_A.Implement
{
    public class ToaThuocRepository : BaseRepository<ToaThuoc>
    , IToaThuocRepository
    {
    private readonly Context _context;
    public ToaThuocRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

