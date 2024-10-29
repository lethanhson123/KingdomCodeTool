namespace Service.Implement
{
    public class DanhMucTinhTrangService : BaseService<DanhMucTinhTrang, IDanhMucTinhTrangRepository>
    , IDanhMucTinhTrangService
    {
    private readonly IDanhMucTinhTrangRepository _DanhMucTinhTrangRepository;
    public DanhMucTinhTrangService(IDanhMucTinhTrangRepository DanhMucTinhTrangRepository) : base(DanhMucTinhTrangRepository)
    {
    _DanhMucTinhTrangRepository = DanhMucTinhTrangRepository;
    }
    }
    }

