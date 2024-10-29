namespace Service.Implement
{
    public class ThanhVienTokenService : BaseService<ThanhVienToken, IThanhVienTokenRepository>
    , IThanhVienTokenService
    {
    private readonly IThanhVienTokenRepository _ThanhVienTokenRepository;
    public ThanhVienTokenService(IThanhVienTokenRepository ThanhVienTokenRepository) : base(ThanhVienTokenRepository)
    {
    _ThanhVienTokenRepository = ThanhVienTokenRepository;
    }
    }
    }

