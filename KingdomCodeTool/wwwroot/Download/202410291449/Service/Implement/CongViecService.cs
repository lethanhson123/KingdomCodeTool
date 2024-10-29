namespace Service.Implement
{
    public class CongViecService : BaseService<CongViec, ICongViecRepository>
    , ICongViecService
    {
    private readonly ICongViecRepository _CongViecRepository;
    public CongViecService(ICongViecRepository CongViecRepository) : base(CongViecRepository)
    {
    _CongViecRepository = CongViecRepository;
    }
    }
    }

