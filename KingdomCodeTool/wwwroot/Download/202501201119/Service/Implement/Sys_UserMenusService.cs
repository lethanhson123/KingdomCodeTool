namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserMenusService : BaseService<Sys_UserMenus, ISys_UserMenusRepository>
    , ISys_UserMenusService
    {
    private readonly ISys_UserMenusRepository _Sys_UserMenusRepository;
    public Sys_UserMenusService(ISys_UserMenusRepository Sys_UserMenusRepository) : base(Sys_UserMenusRepository)
    {
    _Sys_UserMenusRepository = Sys_UserMenusRepository;
    }
    }
    }

