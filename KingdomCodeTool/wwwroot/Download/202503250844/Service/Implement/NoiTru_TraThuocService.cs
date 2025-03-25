namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_TraThuocService : BaseService<NoiTru_TraThuoc, INoiTru_TraThuocRepository>
    , INoiTru_TraThuocService
    {
    private readonly INoiTru_TraThuocRepository _NoiTru_TraThuocRepository;
    public NoiTru_TraThuocService(INoiTru_TraThuocRepository NoiTru_TraThuocRepository) : base(NoiTru_TraThuocRepository)
    {
    _NoiTru_TraThuocRepository = NoiTru_TraThuocRepository;
    }
    }
    }

