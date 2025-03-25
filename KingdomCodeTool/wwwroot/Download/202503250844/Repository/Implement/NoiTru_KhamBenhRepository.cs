namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_KhamBenhRepository : BaseRepository<NoiTru_KhamBenh>
    , INoiTru_KhamBenhRepository
    {
    private readonly Context _context;
    public NoiTru_KhamBenhRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

