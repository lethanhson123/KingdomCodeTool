namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ControlTypesRepository : BaseRepository<Sys_ControlTypes>
    , ISys_ControlTypesRepository
    {
    private readonly Context _context;
    public Sys_ControlTypesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

