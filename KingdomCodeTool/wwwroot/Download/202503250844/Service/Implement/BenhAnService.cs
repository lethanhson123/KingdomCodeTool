namespace Service_eHospital_DongNai_A.Implement
{
    public class BenhAnService : BaseService<BenhAn, IBenhAnRepository>
    , IBenhAnService
    {
    private readonly IBenhAnRepository _BenhAnRepository;
    public BenhAnService(IBenhAnRepository BenhAnRepository) : base(BenhAnRepository)
    {
    _BenhAnRepository = BenhAnRepository;
    }
    }
    }

