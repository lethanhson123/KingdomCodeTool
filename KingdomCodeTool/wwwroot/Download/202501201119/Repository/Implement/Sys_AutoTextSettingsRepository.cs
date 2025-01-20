namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextSettingsRepository : BaseRepository<Sys_AutoTextSettings>
    , ISys_AutoTextSettingsRepository
    {
    private readonly Context _context;
    public Sys_AutoTextSettingsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

