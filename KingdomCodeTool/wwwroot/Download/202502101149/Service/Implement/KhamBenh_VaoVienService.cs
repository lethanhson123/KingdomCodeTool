namespace Service_eHospital_DongNai_A.Implement
{
    public class KhamBenh_VaoVienService : BaseService<KhamBenh_VaoVien, IKhamBenh_VaoVienRepository>
    , IKhamBenh_VaoVienService
    {
    private readonly IKhamBenh_VaoVienRepository _KhamBenh_VaoVienRepository;
    public KhamBenh_VaoVienService(IKhamBenh_VaoVienRepository KhamBenh_VaoVienRepository) : base(KhamBenh_VaoVienRepository)
    {
    _KhamBenh_VaoVienRepository = KhamBenh_VaoVienRepository;
    }
    }
    }

