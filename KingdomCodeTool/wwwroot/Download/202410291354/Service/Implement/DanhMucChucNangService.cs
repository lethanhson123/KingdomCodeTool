namespace Service.Implement
{
    public class DanhMucChucNangService : BaseService<DanhMucChucNang, IDanhMucChucNangRepository>
    , IDanhMucChucNangService
    {
    private readonly IDanhMucChucNangRepository _DanhMucChucNangRepository;
    public DanhMucChucNangService(IDanhMucChucNangRepository DanhMucChucNangRepository) : base(DanhMucChucNangRepository)
    {
    _DanhMucChucNangRepository = DanhMucChucNangRepository;
    }
    }
    }

