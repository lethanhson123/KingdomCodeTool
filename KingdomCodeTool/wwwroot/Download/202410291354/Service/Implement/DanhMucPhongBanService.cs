namespace Service.Implement
{
    public class DanhMucPhongBanService : BaseService<DanhMucPhongBan, IDanhMucPhongBanRepository>
    , IDanhMucPhongBanService
    {
    private readonly IDanhMucPhongBanRepository _DanhMucPhongBanRepository;
    public DanhMucPhongBanService(IDanhMucPhongBanRepository DanhMucPhongBanRepository) : base(DanhMucPhongBanRepository)
    {
    _DanhMucPhongBanRepository = DanhMucPhongBanRepository;
    }
    }
    }

