namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupCommandsService : BaseService<Sys_GroupCommands, ISys_GroupCommandsRepository>
    , ISys_GroupCommandsService
    {
    private readonly ISys_GroupCommandsRepository _Sys_GroupCommandsRepository;
    public Sys_GroupCommandsService(ISys_GroupCommandsRepository Sys_GroupCommandsRepository) : base(Sys_GroupCommandsRepository)
    {
    _Sys_GroupCommandsRepository = Sys_GroupCommandsRepository;
    }
    }
    }

