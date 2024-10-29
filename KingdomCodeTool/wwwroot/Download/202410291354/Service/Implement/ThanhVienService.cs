namespace Service.Implement
{
    public class ThanhVienService : BaseService<ThanhVien, IThanhVienRepository>
    , IThanhVienService
    {
    private readonly IThanhVienRepository _ThanhVienRepository;
    public ThanhVienService(IThanhVienRepository ThanhVienRepository) : base(ThanhVienRepository)
    {
    _ThanhVienRepository = ThanhVienRepository;
    }
    }
    }

