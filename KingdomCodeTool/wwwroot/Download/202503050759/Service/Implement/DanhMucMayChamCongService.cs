namespace Service.Implement
{
    public class DanhMucMayChamCongService : BaseService<DanhMucMayChamCong, IDanhMucMayChamCongRepository>
    , IDanhMucMayChamCongService
    {
    private readonly IDanhMucMayChamCongRepository _DanhMucMayChamCongRepository;
    public DanhMucMayChamCongService(IDanhMucMayChamCongRepository DanhMucMayChamCongRepository) : base(DanhMucMayChamCongRepository)
    {
    _DanhMucMayChamCongRepository = DanhMucMayChamCongRepository;
    }
    }
    }

