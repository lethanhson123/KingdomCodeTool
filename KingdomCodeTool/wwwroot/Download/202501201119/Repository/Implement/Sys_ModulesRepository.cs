namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ModulesRepository : BaseRepository<Sys_Modules>
    , ISys_ModulesRepository
    {
    private readonly Context _context;
    public Sys_ModulesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

