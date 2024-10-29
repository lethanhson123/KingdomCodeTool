namespace Service.Implement
{
    public class DanhMucCongViecService : BaseService<DanhMucCongViec, IDanhMucCongViecRepository>
    , IDanhMucCongViecService
    {
    private readonly IDanhMucCongViecRepository _DanhMucCongViecRepository;
    public DanhMucCongViecService(IDanhMucCongViecRepository DanhMucCongViecRepository) : base(DanhMucCongViecRepository)
    {
    _DanhMucCongViecRepository = DanhMucCongViecRepository;
    }
    }
    }

