namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_LanguagesRepository : BaseRepository<Sys_Languages>
    , ISys_LanguagesRepository
    {
    private readonly Context _context;
    public Sys_LanguagesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

