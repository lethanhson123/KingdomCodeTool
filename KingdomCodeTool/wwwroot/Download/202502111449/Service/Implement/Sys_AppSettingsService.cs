namespace Service_eHospital_DongNai_A_Config.Implement
{
    public class Sys_AppSettingsService : BaseService<Sys_AppSettings, ISys_AppSettingsRepository>
    , ISys_AppSettingsService
    {
    private readonly ISys_AppSettingsRepository _Sys_AppSettingsRepository;
    public Sys_AppSettingsService(ISys_AppSettingsRepository Sys_AppSettingsRepository) : base(Sys_AppSettingsRepository)
    {
    _Sys_AppSettingsRepository = Sys_AppSettingsRepository;
    }
    }
    }

