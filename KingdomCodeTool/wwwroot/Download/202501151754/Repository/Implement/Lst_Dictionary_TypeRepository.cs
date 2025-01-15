namespace Repository.Implement
{
    public class Lst_Dictionary_TypeRepository : BaseRepository<Lst_Dictionary_Type>
    , ILst_Dictionary_TypeRepository
    {
    private readonly Data.Context.Context _context;
    public Lst_Dictionary_TypeRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

