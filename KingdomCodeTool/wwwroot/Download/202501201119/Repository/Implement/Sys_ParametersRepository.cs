namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ParametersRepository : BaseRepository<Sys_Parameters>
    , ISys_ParametersRepository
    {
    private readonly Context _context;
    public Sys_ParametersRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

