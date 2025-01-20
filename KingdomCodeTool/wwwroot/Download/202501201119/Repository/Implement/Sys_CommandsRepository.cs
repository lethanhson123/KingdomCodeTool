namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_CommandsRepository : BaseRepository<Sys_Commands>
    , ISys_CommandsRepository
    {
    private readonly Context _context;
    public Sys_CommandsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

