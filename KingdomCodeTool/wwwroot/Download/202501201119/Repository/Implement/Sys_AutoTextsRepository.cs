namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextsRepository : BaseRepository<Sys_AutoTexts>
    , ISys_AutoTextsRepository
    {
    private readonly Context _context;
    public Sys_AutoTextsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

