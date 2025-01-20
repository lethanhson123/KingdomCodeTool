namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserPasswordHistoryService : BaseService<Sys_UserPasswordHistory, ISys_UserPasswordHistoryRepository>
    , ISys_UserPasswordHistoryService
    {
    private readonly ISys_UserPasswordHistoryRepository _Sys_UserPasswordHistoryRepository;
    public Sys_UserPasswordHistoryService(ISys_UserPasswordHistoryRepository Sys_UserPasswordHistoryRepository) : base(Sys_UserPasswordHistoryRepository)
    {
    _Sys_UserPasswordHistoryRepository = Sys_UserPasswordHistoryRepository;
    }
    }
    }

