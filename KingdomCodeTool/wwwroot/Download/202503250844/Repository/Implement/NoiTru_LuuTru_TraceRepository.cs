namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTru_TraceRepository : BaseRepository<NoiTru_LuuTru_Trace>
    , INoiTru_LuuTru_TraceRepository
    {
    private readonly Context _context;
    public NoiTru_LuuTru_TraceRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

