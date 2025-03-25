namespace Repository_eHospital_DongNai_A.Implement
{
    public class KhamBenh_ToaThuocRepository : BaseRepository<KhamBenh_ToaThuoc>
    , IKhamBenh_ToaThuocRepository
    {
    private readonly Context _context;
    public KhamBenh_ToaThuocRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

