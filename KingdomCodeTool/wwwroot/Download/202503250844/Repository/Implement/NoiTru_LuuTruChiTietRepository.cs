namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTruChiTietRepository : BaseRepository<NoiTru_LuuTruChiTiet>
    , INoiTru_LuuTruChiTietRepository
    {
    private readonly Context _context;
    public NoiTru_LuuTruChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

