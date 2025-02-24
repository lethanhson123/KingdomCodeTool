namespace Service_eHospital_DongNai_A.Implement
{
    public class ChungTuChiTietService : BaseService<ChungTuChiTiet, IChungTuChiTietRepository>
    , IChungTuChiTietService
    {
    private readonly IChungTuChiTietRepository _ChungTuChiTietRepository;
    public ChungTuChiTietService(IChungTuChiTietRepository ChungTuChiTietRepository) : base(ChungTuChiTietRepository)
    {
    _ChungTuChiTietRepository = ChungTuChiTietRepository;
    }
    }
    }

