namespace Service.Implement
{
    public class HRNhanVienTapTinDinhKemService : BaseService<HRNhanVienTapTinDinhKem, IHRNhanVienTapTinDinhKemRepository>
    , IHRNhanVienTapTinDinhKemService
    {
    private readonly IHRNhanVienTapTinDinhKemRepository _HRNhanVienTapTinDinhKemRepository;
    public HRNhanVienTapTinDinhKemService(IHRNhanVienTapTinDinhKemRepository HRNhanVienTapTinDinhKemRepository) : base(HRNhanVienTapTinDinhKemRepository)
    {
    _HRNhanVienTapTinDinhKemRepository = HRNhanVienTapTinDinhKemRepository;
    }
    }
    }

