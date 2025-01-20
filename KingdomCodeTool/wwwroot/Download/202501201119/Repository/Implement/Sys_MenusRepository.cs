namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_MenusRepository : BaseRepository<Sys_Menus>
    , ISys_MenusRepository
    {
    private readonly Context _context;
    public Sys_MenusRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

