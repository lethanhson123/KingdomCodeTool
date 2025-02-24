namespace Repository_eHospital_DongNai_A.Implement
{
    public class KhamBenhRepository : BaseRepository<KhamBenh>
    , IKhamBenhRepository
    {
    private readonly Context _context;
    public KhamBenhRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

