namespace Repository.Implement
{
    public class Lst_DictionaryRepository : BaseRepository<Lst_Dictionary>
    , ILst_DictionaryRepository
    {
    private readonly Data.Context.Context _context;
    public Lst_DictionaryRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

