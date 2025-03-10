namespace Service.Implement
{
    public class DanhMucDonViTinhService : BaseService<DanhMucDonViTinh, IDanhMucDonViTinhRepository>
    , IDanhMucDonViTinhService
    {
    private readonly IDanhMucDonViTinhRepository _DanhMucDonViTinhRepository;
    public DanhMucDonViTinhService(IDanhMucDonViTinhRepository DanhMucDonViTinhRepository) : base(DanhMucDonViTinhRepository)
    {
    _DanhMucDonViTinhRepository = DanhMucDonViTinhRepository;
    }
    }
    }

