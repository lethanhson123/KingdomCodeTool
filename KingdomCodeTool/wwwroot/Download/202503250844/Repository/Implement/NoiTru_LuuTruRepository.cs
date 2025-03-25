namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTruRepository : BaseRepository<NoiTru_LuuTru>
    , INoiTru_LuuTruRepository
    {
    private readonly Context _context;
    public NoiTru_LuuTruRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

