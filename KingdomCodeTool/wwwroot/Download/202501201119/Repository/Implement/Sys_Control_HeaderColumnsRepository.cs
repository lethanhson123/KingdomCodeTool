namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_Control_HeaderColumnsRepository : BaseRepository<Sys_Control_HeaderColumns>
    , ISys_Control_HeaderColumnsRepository
    {
    private readonly Context _context;
    public Sys_Control_HeaderColumnsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

