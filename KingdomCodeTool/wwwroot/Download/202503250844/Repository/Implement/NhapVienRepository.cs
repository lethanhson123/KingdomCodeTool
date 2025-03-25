namespace Repository_eHospital_DongNai_A.Implement
{
    public class NhapVienRepository : BaseRepository<NhapVien>
    , INhapVienRepository
    {
    private readonly Context _context;
    public NhapVienRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

