namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_NhapVienService : BaseService<NoiTru_NhapVien, INoiTru_NhapVienRepository>
    , INoiTru_NhapVienService
    {
    private readonly INoiTru_NhapVienRepository _NoiTru_NhapVienRepository;
    public NoiTru_NhapVienService(INoiTru_NhapVienRepository NoiTru_NhapVienRepository) : base(NoiTru_NhapVienRepository)
    {
    _NoiTru_NhapVienRepository = NoiTru_NhapVienRepository;
    }
    }
    }

