namespace Service_eHospital_DongNai_A.Implement
{
    public class KhamBenh_ToaThuocService : BaseService<KhamBenh_ToaThuoc, IKhamBenh_ToaThuocRepository>
    , IKhamBenh_ToaThuocService
    {
    private readonly IKhamBenh_ToaThuocRepository _KhamBenh_ToaThuocRepository;
    public KhamBenh_ToaThuocService(IKhamBenh_ToaThuocRepository KhamBenh_ToaThuocRepository) : base(KhamBenh_ToaThuocRepository)
    {
    _KhamBenh_ToaThuocRepository = KhamBenh_ToaThuocRepository;
    }
    }
    }

