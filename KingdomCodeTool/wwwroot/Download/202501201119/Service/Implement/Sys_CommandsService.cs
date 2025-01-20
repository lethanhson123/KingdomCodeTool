namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_CommandsService : BaseService<Sys_Commands, ISys_CommandsRepository>
    , ISys_CommandsService
    {
    private readonly ISys_CommandsRepository _Sys_CommandsRepository;
    public Sys_CommandsService(ISys_CommandsRepository Sys_CommandsRepository) : base(Sys_CommandsRepository)
    {
    _Sys_CommandsRepository = Sys_CommandsRepository;
    }
    }
    }

