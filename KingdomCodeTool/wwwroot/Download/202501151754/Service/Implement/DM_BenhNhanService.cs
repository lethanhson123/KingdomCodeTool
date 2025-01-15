namespace Service.Implement
{
    public class DM_BenhNhanService : BaseService<DM_BenhNhan, IDM_BenhNhanRepository>
    , IDM_BenhNhanService
    {
    private readonly IDM_BenhNhanRepository _DM_BenhNhanRepository;
    public DM_BenhNhanService(IDM_BenhNhanRepository DM_BenhNhanRepository) : base(DM_BenhNhanRepository)
    {
    _DM_BenhNhanRepository = DM_BenhNhanRepository;
    }
    }
    }

