namespace Service.Implement
{
    public class DanhMucBenhVienService : BaseService<DanhMucBenhVien, IDanhMucBenhVienRepository>
    , IDanhMucBenhVienService
    {
    private readonly IDanhMucBenhVienRepository _DanhMucBenhVienRepository;
    public DanhMucBenhVienService(IDanhMucBenhVienRepository DanhMucBenhVienRepository) : base(DanhMucBenhVienRepository)
    {
    _DanhMucBenhVienRepository = DanhMucBenhVienRepository;
    }
    }
    }

