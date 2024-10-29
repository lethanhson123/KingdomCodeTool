namespace Service.Implement
{
    public class ThanhVienLichSuTruyCapService : BaseService<ThanhVienLichSuTruyCap, IThanhVienLichSuTruyCapRepository>
    , IThanhVienLichSuTruyCapService
    {
    private readonly IThanhVienLichSuTruyCapRepository _ThanhVienLichSuTruyCapRepository;
    public ThanhVienLichSuTruyCapService(IThanhVienLichSuTruyCapRepository ThanhVienLichSuTruyCapRepository) : base(ThanhVienLichSuTruyCapRepository)
    {
    _ThanhVienLichSuTruyCapRepository = ThanhVienLichSuTruyCapRepository;
    }
    }
    }

