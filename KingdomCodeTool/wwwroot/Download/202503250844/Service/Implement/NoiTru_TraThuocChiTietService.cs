namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_TraThuocChiTietService : BaseService<NoiTru_TraThuocChiTiet, INoiTru_TraThuocChiTietRepository>
    , INoiTru_TraThuocChiTietService
    {
    private readonly INoiTru_TraThuocChiTietRepository _NoiTru_TraThuocChiTietRepository;
    public NoiTru_TraThuocChiTietService(INoiTru_TraThuocChiTietRepository NoiTru_TraThuocChiTietRepository) : base(NoiTru_TraThuocChiTietRepository)
    {
    _NoiTru_TraThuocChiTietRepository = NoiTru_TraThuocChiTietRepository;
    }
    }
    }

