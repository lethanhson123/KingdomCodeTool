namespace Repository_eHospital_DongNai_A.Implement
{
    public class ChungTuRepository : BaseRepository<ChungTu>
    , IChungTuRepository
    {
    private readonly Context _context;
    public ChungTuRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

