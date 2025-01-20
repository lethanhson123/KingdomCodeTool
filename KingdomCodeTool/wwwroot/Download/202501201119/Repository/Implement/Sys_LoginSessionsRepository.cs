namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_LoginSessionsRepository : BaseRepository<Sys_LoginSessions>
    , ISys_LoginSessionsRepository
    {
    private readonly Context _context;
    public Sys_LoginSessionsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

