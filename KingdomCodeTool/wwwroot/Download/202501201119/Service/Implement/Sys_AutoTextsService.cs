namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextsService : BaseService<Sys_AutoTexts, ISys_AutoTextsRepository>
    , ISys_AutoTextsService
    {
    private readonly ISys_AutoTextsRepository _Sys_AutoTextsRepository;
    public Sys_AutoTextsService(ISys_AutoTextsRepository Sys_AutoTextsRepository) : base(Sys_AutoTextsRepository)
    {
    _Sys_AutoTextsRepository = Sys_AutoTextsRepository;
    }
    }
    }

