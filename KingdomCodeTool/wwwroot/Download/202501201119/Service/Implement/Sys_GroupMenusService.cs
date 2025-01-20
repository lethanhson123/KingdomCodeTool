namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupMenusService : BaseService<Sys_GroupMenus, ISys_GroupMenusRepository>
    , ISys_GroupMenusService
    {
    private readonly ISys_GroupMenusRepository _Sys_GroupMenusRepository;
    public Sys_GroupMenusService(ISys_GroupMenusRepository Sys_GroupMenusRepository) : base(Sys_GroupMenusRepository)
    {
    _Sys_GroupMenusRepository = Sys_GroupMenusRepository;
    }
    }
    }

