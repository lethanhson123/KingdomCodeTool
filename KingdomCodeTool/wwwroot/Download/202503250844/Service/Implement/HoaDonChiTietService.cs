namespace Service_eHospital_DongNai_A.Implement
{
    public class HoaDonChiTietService : BaseService<HoaDonChiTiet, IHoaDonChiTietRepository>
    , IHoaDonChiTietService
    {
    private readonly IHoaDonChiTietRepository _HoaDonChiTietRepository;
    public HoaDonChiTietService(IHoaDonChiTietRepository HoaDonChiTietRepository) : base(HoaDonChiTietRepository)
    {
    _HoaDonChiTietRepository = HoaDonChiTietRepository;
    }
    }
    }

