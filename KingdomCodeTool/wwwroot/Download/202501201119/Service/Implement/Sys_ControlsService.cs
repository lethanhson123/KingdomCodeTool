namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ControlsService : BaseService<Sys_Controls, ISys_ControlsRepository>
    , ISys_ControlsService
    {
    private readonly ISys_ControlsRepository _Sys_ControlsRepository;
    public Sys_ControlsService(ISys_ControlsRepository Sys_ControlsRepository) : base(Sys_ControlsRepository)
    {
    _Sys_ControlsRepository = Sys_ControlsRepository;
    }
    }
    }

