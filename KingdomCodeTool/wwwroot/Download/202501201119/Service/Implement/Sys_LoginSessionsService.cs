namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_LoginSessionsService : BaseService<Sys_LoginSessions, ISys_LoginSessionsRepository>
    , ISys_LoginSessionsService
    {
    private readonly ISys_LoginSessionsRepository _Sys_LoginSessionsRepository;
    public Sys_LoginSessionsService(ISys_LoginSessionsRepository Sys_LoginSessionsRepository) : base(Sys_LoginSessionsRepository)
    {
    _Sys_LoginSessionsRepository = Sys_LoginSessionsRepository;
    }
    }
    }

