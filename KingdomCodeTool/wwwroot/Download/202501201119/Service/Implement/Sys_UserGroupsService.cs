namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserGroupsService : BaseService<Sys_UserGroups, ISys_UserGroupsRepository>
    , ISys_UserGroupsService
    {
    private readonly ISys_UserGroupsRepository _Sys_UserGroupsRepository;
    public Sys_UserGroupsService(ISys_UserGroupsRepository Sys_UserGroupsRepository) : base(Sys_UserGroupsRepository)
    {
    _Sys_UserGroupsRepository = Sys_UserGroupsRepository;
    }
    }
    }

