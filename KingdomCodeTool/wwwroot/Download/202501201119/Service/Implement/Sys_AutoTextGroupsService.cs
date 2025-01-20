namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextGroupsService : BaseService<Sys_AutoTextGroups, ISys_AutoTextGroupsRepository>
    , ISys_AutoTextGroupsService
    {
    private readonly ISys_AutoTextGroupsRepository _Sys_AutoTextGroupsRepository;
    public Sys_AutoTextGroupsService(ISys_AutoTextGroupsRepository Sys_AutoTextGroupsRepository) : base(Sys_AutoTextGroupsRepository)
    {
    _Sys_AutoTextGroupsRepository = Sys_AutoTextGroupsRepository;
    }
    }
    }

