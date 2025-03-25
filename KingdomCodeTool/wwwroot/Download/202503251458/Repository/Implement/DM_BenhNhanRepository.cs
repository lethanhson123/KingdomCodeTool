namespace Repository_eHospital_DongNai_A_Dictionary.Implement
{
    public class DM_BenhNhanRepository : BaseRepository<DM_BenhNhan>
    , IDM_BenhNhanRepository
    {
    private readonly Context _context;
    public DM_BenhNhanRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

