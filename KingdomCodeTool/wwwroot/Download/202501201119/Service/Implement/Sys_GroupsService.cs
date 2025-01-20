namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupsService : BaseService<Sys_Groups, ISys_GroupsRepository>
    , ISys_GroupsService
    {
    private readonly ISys_GroupsRepository _Sys_GroupsRepository;
    public Sys_GroupsService(ISys_GroupsRepository Sys_GroupsRepository) : base(Sys_GroupsRepository)
    {
    _Sys_GroupsRepository = Sys_GroupsRepository;
    }
    }
    }

