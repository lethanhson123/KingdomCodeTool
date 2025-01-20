namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_UsersRepository : BaseRepository<Sys_Users>
    , ISys_UsersRepository
    {
    private readonly Context _context;
    public Sys_UsersRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

