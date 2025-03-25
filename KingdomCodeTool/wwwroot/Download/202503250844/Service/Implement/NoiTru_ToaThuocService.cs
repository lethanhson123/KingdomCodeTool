namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_ToaThuocService : BaseService<NoiTru_ToaThuoc, INoiTru_ToaThuocRepository>
    , INoiTru_ToaThuocService
    {
    private readonly INoiTru_ToaThuocRepository _NoiTru_ToaThuocRepository;
    public NoiTru_ToaThuocService(INoiTru_ToaThuocRepository NoiTru_ToaThuocRepository) : base(NoiTru_ToaThuocRepository)
    {
    _NoiTru_ToaThuocRepository = NoiTru_ToaThuocRepository;
    }
    }
    }

