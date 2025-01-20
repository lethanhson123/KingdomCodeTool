namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextUsersService : BaseService<Sys_AutoTextUsers, ISys_AutoTextUsersRepository>
    , ISys_AutoTextUsersService
    {
    private readonly ISys_AutoTextUsersRepository _Sys_AutoTextUsersRepository;
    public Sys_AutoTextUsersService(ISys_AutoTextUsersRepository Sys_AutoTextUsersRepository) : base(Sys_AutoTextUsersRepository)
    {
    _Sys_AutoTextUsersRepository = Sys_AutoTextUsersRepository;
    }
    }
    }

