namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTruService : BaseService<NoiTru_LuuTru, INoiTru_LuuTruRepository>
    , INoiTru_LuuTruService
    {
    private readonly INoiTru_LuuTruRepository _NoiTru_LuuTruRepository;
    public NoiTru_LuuTruService(INoiTru_LuuTruRepository NoiTru_LuuTruRepository) : base(NoiTru_LuuTruRepository)
    {
    _NoiTru_LuuTruRepository = NoiTru_LuuTruRepository;
    }
    }
    }

