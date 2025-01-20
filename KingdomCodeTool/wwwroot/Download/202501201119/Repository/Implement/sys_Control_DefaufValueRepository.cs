namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class sys_Control_DefaufValueRepository : BaseRepository<sys_Control_DefaufValue>
    , Isys_Control_DefaufValueRepository
    {
    private readonly Context _context;
    public sys_Control_DefaufValueRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

