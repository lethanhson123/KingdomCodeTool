namespace Service_eHospital_DongNai_A.Implement
{
    public class KhamBenhService : BaseService<KhamBenh, IKhamBenhRepository>
    , IKhamBenhService
    {
    private readonly IKhamBenhRepository _KhamBenhRepository;
    public KhamBenhService(IKhamBenhRepository KhamBenhRepository) : base(KhamBenhRepository)
    {
    _KhamBenhRepository = KhamBenhRepository;
    }
    }
    }

