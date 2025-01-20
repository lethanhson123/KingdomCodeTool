namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ControlTypesService : BaseService<Sys_ControlTypes, ISys_ControlTypesRepository>
    , ISys_ControlTypesService
    {
    private readonly ISys_ControlTypesRepository _Sys_ControlTypesRepository;
    public Sys_ControlTypesService(ISys_ControlTypesRepository Sys_ControlTypesRepository) : base(Sys_ControlTypesRepository)
    {
    _Sys_ControlTypesRepository = Sys_ControlTypesRepository;
    }
    }
    }

