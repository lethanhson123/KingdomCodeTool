namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_TraThuocChiTietRepository : BaseRepository<NoiTru_TraThuocChiTiet>
    , INoiTru_TraThuocChiTietRepository
    {
    private readonly Context _context;
    public NoiTru_TraThuocChiTietRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

