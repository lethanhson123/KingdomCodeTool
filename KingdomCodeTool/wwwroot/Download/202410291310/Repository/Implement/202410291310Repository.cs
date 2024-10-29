namespace Repository.Implement
{
    public class 202410291310Repository : BaseRepository<202410291310>
    , I202410291310Repository
    {
    private readonly Data.Context.Context _context;
    public 202410291310Repository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

