namespace Service_eHospital_DongNai_A.Implement
{
    public class KhamBenh_VaoVien_SanKhoaService : BaseService<KhamBenh_VaoVien_SanKhoa, IKhamBenh_VaoVien_SanKhoaRepository>
    , IKhamBenh_VaoVien_SanKhoaService
    {
    private readonly IKhamBenh_VaoVien_SanKhoaRepository _KhamBenh_VaoVien_SanKhoaRepository;
    public KhamBenh_VaoVien_SanKhoaService(IKhamBenh_VaoVien_SanKhoaRepository KhamBenh_VaoVien_SanKhoaRepository) : base(KhamBenh_VaoVien_SanKhoaRepository)
    {
    _KhamBenh_VaoVien_SanKhoaRepository = KhamBenh_VaoVien_SanKhoaRepository;
    }
    }
    }

