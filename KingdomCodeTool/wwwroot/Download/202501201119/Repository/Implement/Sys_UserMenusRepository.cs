namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserMenusRepository : BaseRepository<Sys_UserMenus>
    , ISys_UserMenusRepository
    {
    private readonly Context _context;
    public Sys_UserMenusRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

