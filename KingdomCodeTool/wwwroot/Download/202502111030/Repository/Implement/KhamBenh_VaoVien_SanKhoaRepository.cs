namespace Repository_eHospital_DongNai_A.Implement
{
    public class KhamBenh_VaoVien_SanKhoaRepository : BaseRepository<KhamBenh_VaoVien_SanKhoa>
    , IKhamBenh_VaoVien_SanKhoaRepository
    {
    private readonly Context _context;
    public KhamBenh_VaoVien_SanKhoaRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

