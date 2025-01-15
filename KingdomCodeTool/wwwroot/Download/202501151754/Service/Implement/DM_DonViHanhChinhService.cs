namespace Service.Implement
{
    public class DM_DonViHanhChinhService : BaseService<DM_DonViHanhChinh, IDM_DonViHanhChinhRepository>
    , IDM_DonViHanhChinhService
    {
    private readonly IDM_DonViHanhChinhRepository _DM_DonViHanhChinhRepository;
    public DM_DonViHanhChinhService(IDM_DonViHanhChinhRepository DM_DonViHanhChinhRepository) : base(DM_DonViHanhChinhRepository)
    {
    _DM_DonViHanhChinhRepository = DM_DonViHanhChinhRepository;
    }
    }
    }

