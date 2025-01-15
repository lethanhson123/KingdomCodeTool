namespace Repository.Implement
{
    public class DM_DonViHanhChinhRepository : BaseRepository<DM_DonViHanhChinh>
    , IDM_DonViHanhChinhRepository
    {
    private readonly Data.Context.Context _context;
    public DM_DonViHanhChinhRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

