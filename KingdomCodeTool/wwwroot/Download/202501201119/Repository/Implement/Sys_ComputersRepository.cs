namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ComputersRepository : BaseRepository<Sys_Computers>
    , ISys_ComputersRepository
    {
    private readonly Context _context;
    public Sys_ComputersRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

