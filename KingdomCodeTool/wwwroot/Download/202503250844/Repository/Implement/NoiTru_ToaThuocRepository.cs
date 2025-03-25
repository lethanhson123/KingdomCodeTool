namespace Repository_eHospital_DongNai_A.Implement
{
    public class NoiTru_ToaThuocRepository : BaseRepository<NoiTru_ToaThuoc>
    , INoiTru_ToaThuocRepository
    {
    private readonly Context _context;
    public NoiTru_ToaThuocRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

