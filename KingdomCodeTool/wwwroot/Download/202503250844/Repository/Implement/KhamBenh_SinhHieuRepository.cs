namespace Repository_eHospital_DongNai_A.Implement
{
    public class KhamBenh_SinhHieuRepository : BaseRepository<KhamBenh_SinhHieu>
    , IKhamBenh_SinhHieuRepository
    {
    private readonly Context _context;
    public KhamBenh_SinhHieuRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

