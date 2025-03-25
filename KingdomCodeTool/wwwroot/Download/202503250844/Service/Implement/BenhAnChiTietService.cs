namespace Service_eHospital_DongNai_A.Implement
{
    public class BenhAnChiTietService : BaseService<BenhAnChiTiet, IBenhAnChiTietRepository>
    , IBenhAnChiTietService
    {
    private readonly IBenhAnChiTietRepository _BenhAnChiTietRepository;
    public BenhAnChiTietService(IBenhAnChiTietRepository BenhAnChiTietRepository) : base(BenhAnChiTietRepository)
    {
    _BenhAnChiTietRepository = BenhAnChiTietRepository;
    }
    }
    }

