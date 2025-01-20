namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupCommandsRepository : BaseRepository<Sys_GroupCommands>
    , ISys_GroupCommandsRepository
    {
    private readonly Context _context;
    public Sys_GroupCommandsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

