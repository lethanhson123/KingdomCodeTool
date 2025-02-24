namespace Repository_eHospital_DongNai_A_Config.Implement
{
    public class Sys_AppSettingsRepository : BaseRepository<Sys_AppSettings>
    , ISys_AppSettingsRepository
    {
    private readonly Context _context;
    public Sys_AppSettingsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

