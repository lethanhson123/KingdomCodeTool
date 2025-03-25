namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_NhapVienRepository : BaseRepository<NoiTru_NhapVien>
    , INoiTru_NhapVienRepository
    {
    private readonly Context _context;
    public NoiTru_NhapVienRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

