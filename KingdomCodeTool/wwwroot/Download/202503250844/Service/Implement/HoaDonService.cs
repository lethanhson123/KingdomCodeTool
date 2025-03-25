namespace Service_eHospital_DongNai_A.Implement
{
    public class HoaDonService : BaseService<HoaDon, IHoaDonRepository>
    , IHoaDonService
    {
    private readonly IHoaDonRepository _HoaDonRepository;
    public HoaDonService(IHoaDonRepository HoaDonRepository) : base(HoaDonRepository)
    {
    _HoaDonRepository = HoaDonRepository;
    }
    }
    }

