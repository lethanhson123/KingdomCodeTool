namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_TraThuocRepository : BaseRepository<NoiTru_TraThuoc>
    , INoiTru_TraThuocRepository
    {
    private readonly Context _context;
    public NoiTru_TraThuocRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

