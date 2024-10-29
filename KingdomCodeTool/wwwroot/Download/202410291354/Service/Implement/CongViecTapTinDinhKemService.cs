namespace Service.Implement
{
    public class CongViecTapTinDinhKemService : BaseService<CongViecTapTinDinhKem, ICongViecTapTinDinhKemRepository>
    , ICongViecTapTinDinhKemService
    {
    private readonly ICongViecTapTinDinhKemRepository _CongViecTapTinDinhKemRepository;
    public CongViecTapTinDinhKemService(ICongViecTapTinDinhKemRepository CongViecTapTinDinhKemRepository) : base(CongViecTapTinDinhKemRepository)
    {
    _CongViecTapTinDinhKemRepository = CongViecTapTinDinhKemRepository;
    }
    }
    }

