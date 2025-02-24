namespace Service_eHospital_DongNai_A.Implement
{
    public class ChungTuService : BaseService<ChungTu, IChungTuRepository>
    , IChungTuService
    {
    private readonly IChungTuRepository _ChungTuRepository;
    public ChungTuService(IChungTuRepository ChungTuRepository) : base(ChungTuRepository)
    {
    _ChungTuRepository = ChungTuRepository;
    }
    }
    }

