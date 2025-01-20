namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_SiteDatabaseConnectionsRepository : BaseRepository<Sys_SiteDatabaseConnections>
    , ISys_SiteDatabaseConnectionsRepository
    {
    private readonly Context _context;
    public Sys_SiteDatabaseConnectionsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

