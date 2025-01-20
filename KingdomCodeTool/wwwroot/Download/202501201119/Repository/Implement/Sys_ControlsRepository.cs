namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ControlsRepository : BaseRepository<Sys_Controls>
    , ISys_ControlsRepository
    {
    private readonly Context _context;
    public Sys_ControlsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

