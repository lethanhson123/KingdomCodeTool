namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextSettingsService : BaseService<Sys_AutoTextSettings, ISys_AutoTextSettingsRepository>
    , ISys_AutoTextSettingsService
    {
    private readonly ISys_AutoTextSettingsRepository _Sys_AutoTextSettingsRepository;
    public Sys_AutoTextSettingsService(ISys_AutoTextSettingsRepository Sys_AutoTextSettingsRepository) : base(Sys_AutoTextSettingsRepository)
    {
    _Sys_AutoTextSettingsRepository = Sys_AutoTextSettingsRepository;
    }
    }
    }

