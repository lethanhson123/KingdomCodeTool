namespace Service.Implement
{
    public class Lst_Dictionary_TypeService : BaseService<Lst_Dictionary_Type, ILst_Dictionary_TypeRepository>
    , ILst_Dictionary_TypeService
    {
    private readonly ILst_Dictionary_TypeRepository _Lst_Dictionary_TypeRepository;
    public Lst_Dictionary_TypeService(ILst_Dictionary_TypeRepository Lst_Dictionary_TypeRepository) : base(Lst_Dictionary_TypeRepository)
    {
    _Lst_Dictionary_TypeRepository = Lst_Dictionary_TypeRepository;
    }
    }
    }

