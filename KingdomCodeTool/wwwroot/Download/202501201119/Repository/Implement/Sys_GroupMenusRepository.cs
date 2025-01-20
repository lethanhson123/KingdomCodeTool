namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupMenusRepository : BaseRepository<Sys_GroupMenus>
    , ISys_GroupMenusRepository
    {
    private readonly Context _context;
    public Sys_GroupMenusRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

