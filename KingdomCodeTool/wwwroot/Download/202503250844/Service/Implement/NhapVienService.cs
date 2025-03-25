namespace Service_eHospital_DongNai_A.Implement
{
    public class NhapVienService : BaseService<NhapVien, INhapVienRepository>
    , INhapVienService
    {
    private readonly INhapVienRepository _NhapVienRepository;
    public NhapVienService(INhapVienRepository NhapVienRepository) : base(NhapVienRepository)
    {
    _NhapVienRepository = NhapVienRepository;
    }
    }
    }

