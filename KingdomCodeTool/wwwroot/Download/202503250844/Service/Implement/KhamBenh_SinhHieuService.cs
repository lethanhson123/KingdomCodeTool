namespace Service_eHospital_DongNai_A.Implement
{
    public class KhamBenh_SinhHieuService : BaseService<KhamBenh_SinhHieu, IKhamBenh_SinhHieuRepository>
    , IKhamBenh_SinhHieuService
    {
    private readonly IKhamBenh_SinhHieuRepository _KhamBenh_SinhHieuRepository;
    public KhamBenh_SinhHieuService(IKhamBenh_SinhHieuRepository KhamBenh_SinhHieuRepository) : base(KhamBenh_SinhHieuRepository)
    {
    _KhamBenh_SinhHieuRepository = KhamBenh_SinhHieuRepository;
    }
    }
    }

