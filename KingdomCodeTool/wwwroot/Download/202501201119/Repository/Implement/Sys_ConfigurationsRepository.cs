namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ConfigurationsRepository : BaseRepository<Sys_Configurations>
    , ISys_ConfigurationsRepository
    {
    private readonly Context _context;
    public Sys_ConfigurationsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

