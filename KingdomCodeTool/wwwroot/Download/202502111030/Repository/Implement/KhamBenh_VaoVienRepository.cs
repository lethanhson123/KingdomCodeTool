namespace Repository_eHospital_DongNai_A.Implement
{
    public class KhamBenh_VaoVienRepository : BaseRepository<KhamBenh_VaoVien>
    , IKhamBenh_VaoVienRepository
    {
    private readonly Context _context;
    public KhamBenh_VaoVienRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

