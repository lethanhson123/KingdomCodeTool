namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextUsersRepository : BaseRepository<Sys_AutoTextUsers>
    , ISys_AutoTextUsersRepository
    {
    private readonly Context _context;
    public Sys_AutoTextUsersRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

