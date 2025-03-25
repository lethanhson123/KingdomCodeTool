namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTruChiTietService : BaseService<NoiTru_LuuTruChiTiet, INoiTru_LuuTruChiTietRepository>
    , INoiTru_LuuTruChiTietService
    {
    private readonly INoiTru_LuuTruChiTietRepository _NoiTru_LuuTruChiTietRepository;
    public NoiTru_LuuTruChiTietService(INoiTru_LuuTruChiTietRepository NoiTru_LuuTruChiTietRepository) : base(NoiTru_LuuTruChiTietRepository)
    {
    _NoiTru_LuuTruChiTietRepository = NoiTru_LuuTruChiTietRepository;
    }
    }
    }

