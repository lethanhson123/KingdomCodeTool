namespace Service_eHospital_DongNai_A_Config.Implement
{
    public class Sys_AppPrivateSettingsService : BaseService<Sys_AppPrivateSettings, ISys_AppPrivateSettingsRepository>
    , ISys_AppPrivateSettingsService
    {
    private readonly ISys_AppPrivateSettingsRepository _Sys_AppPrivateSettingsRepository;
    public Sys_AppPrivateSettingsService(ISys_AppPrivateSettingsRepository Sys_AppPrivateSettingsRepository) : base(Sys_AppPrivateSettingsRepository)
    {
    _Sys_AppPrivateSettingsRepository = Sys_AppPrivateSettingsRepository;
    }
    }
    }

