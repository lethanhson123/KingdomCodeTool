namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_MenusService : BaseService<Sys_Menus, ISys_MenusRepository>
    , ISys_MenusService
    {
    private readonly ISys_MenusRepository _Sys_MenusRepository;
    public Sys_MenusService(ISys_MenusRepository Sys_MenusRepository) : base(Sys_MenusRepository)
    {
    _Sys_MenusRepository = Sys_MenusRepository;
    }
    }
    }

