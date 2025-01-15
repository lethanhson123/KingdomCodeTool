namespace Service.Implement
{
    public class DM_BenhNhan_BHYTService : BaseService<DM_BenhNhan_BHYT, IDM_BenhNhan_BHYTRepository>
    , IDM_BenhNhan_BHYTService
    {
    private readonly IDM_BenhNhan_BHYTRepository _DM_BenhNhan_BHYTRepository;
    public DM_BenhNhan_BHYTService(IDM_BenhNhan_BHYTRepository DM_BenhNhan_BHYTRepository) : base(DM_BenhNhan_BHYTRepository)
    {
    _DM_BenhNhan_BHYTRepository = DM_BenhNhan_BHYTRepository;
    }
    }
    }

