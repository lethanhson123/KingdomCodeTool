namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ConfigurationsService : BaseService<Sys_Configurations, ISys_ConfigurationsRepository>
    , ISys_ConfigurationsService
    {
    private readonly ISys_ConfigurationsRepository _Sys_ConfigurationsRepository;
    public Sys_ConfigurationsService(ISys_ConfigurationsRepository Sys_ConfigurationsRepository) : base(Sys_ConfigurationsRepository)
    {
    _Sys_ConfigurationsRepository = Sys_ConfigurationsRepository;
    }
    }
    }

