namespace Service.Implement
{
    public class ThanhVienChucNangService : BaseService<ThanhVienChucNang, IThanhVienChucNangRepository>
    , IThanhVienChucNangService
    {
    private readonly IThanhVienChucNangRepository _ThanhVienChucNangRepository;
    public ThanhVienChucNangService(IThanhVienChucNangRepository ThanhVienChucNangRepository) : base(ThanhVienChucNangRepository)
    {
    _ThanhVienChucNangRepository = ThanhVienChucNangRepository;
    }
    }
    }

