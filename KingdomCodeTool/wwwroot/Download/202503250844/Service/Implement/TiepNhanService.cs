namespace Service_eHospital_DongNai_A.Implement
{
    public class TiepNhanService : BaseService<TiepNhan, ITiepNhanRepository>
    , ITiepNhanService
    {
    private readonly ITiepNhanRepository _TiepNhanRepository;
    public TiepNhanService(ITiepNhanRepository TiepNhanRepository) : base(TiepNhanRepository)
    {
    _TiepNhanRepository = TiepNhanRepository;
    }
    }
    }

