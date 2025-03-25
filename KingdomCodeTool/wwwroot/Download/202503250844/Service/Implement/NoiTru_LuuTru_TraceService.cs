namespace Service_eHospital_DongNai_A.Implement
{
    public class NoiTru_LuuTru_TraceService : BaseService<NoiTru_LuuTru_Trace, INoiTru_LuuTru_TraceRepository>
    , INoiTru_LuuTru_TraceService
    {
    private readonly INoiTru_LuuTru_TraceRepository _NoiTru_LuuTru_TraceRepository;
    public NoiTru_LuuTru_TraceService(INoiTru_LuuTru_TraceRepository NoiTru_LuuTru_TraceRepository) : base(NoiTru_LuuTru_TraceRepository)
    {
    _NoiTru_LuuTru_TraceRepository = NoiTru_LuuTru_TraceRepository;
    }
    }
    }

