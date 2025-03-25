namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_KhamBenhService : BaseService<NoiTru_KhamBenh, INoiTru_KhamBenhRepository>
    , INoiTru_KhamBenhService
    {
    private readonly INoiTru_KhamBenhRepository _NoiTru_KhamBenhRepository;
    public NoiTru_KhamBenhService(INoiTru_KhamBenhRepository NoiTru_KhamBenhRepository) : base(NoiTru_KhamBenhRepository)
    {
    _NoiTru_KhamBenhRepository = NoiTru_KhamBenhRepository;
    }
    }
    }

