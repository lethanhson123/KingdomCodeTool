namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserCommandsRepository : BaseRepository<Sys_UserCommands>
    , ISys_UserCommandsRepository
    {
    private readonly Context _context;
    public Sys_UserCommandsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

