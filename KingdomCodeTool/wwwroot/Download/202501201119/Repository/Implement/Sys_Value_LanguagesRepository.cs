namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_Value_LanguagesRepository : BaseRepository<Sys_Value_Languages>
    , ISys_Value_LanguagesRepository
    {
    private readonly Context _context;
    public Sys_Value_LanguagesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

