namespace Service.Implement
{
    public class Lst_DictionaryService : BaseService<Lst_Dictionary, ILst_DictionaryRepository>
    , ILst_DictionaryService
    {
    private readonly ILst_DictionaryRepository _Lst_DictionaryRepository;
    public Lst_DictionaryService(ILst_DictionaryRepository Lst_DictionaryRepository) : base(Lst_DictionaryRepository)
    {
    _Lst_DictionaryRepository = Lst_DictionaryRepository;
    }
    }
    }

