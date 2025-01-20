namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ModulesService : BaseService<Sys_Modules, ISys_ModulesRepository>
    , ISys_ModulesService
    {
    private readonly ISys_ModulesRepository _Sys_ModulesRepository;
    public Sys_ModulesService(ISys_ModulesRepository Sys_ModulesRepository) : base(Sys_ModulesRepository)
    {
    _Sys_ModulesRepository = Sys_ModulesRepository;
    }
    }
    }

