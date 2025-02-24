namespace Repository_eHospital_DongNai_A_Config.Implement
{
    public class Sys_AppPrivateSettingsRepository : BaseRepository<Sys_AppPrivateSettings>
    , ISys_AppPrivateSettingsRepository
    {
    private readonly Context _context;
    public Sys_AppPrivateSettingsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

