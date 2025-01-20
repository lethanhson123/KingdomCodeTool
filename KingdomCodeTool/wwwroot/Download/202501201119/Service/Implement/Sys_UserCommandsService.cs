namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserCommandsService : BaseService<Sys_UserCommands, ISys_UserCommandsRepository>
    , ISys_UserCommandsService
    {
    private readonly ISys_UserCommandsRepository _Sys_UserCommandsRepository;
    public Sys_UserCommandsService(ISys_UserCommandsRepository Sys_UserCommandsRepository) : base(Sys_UserCommandsRepository)
    {
    _Sys_UserCommandsRepository = Sys_UserCommandsRepository;
    }
    }
    }

