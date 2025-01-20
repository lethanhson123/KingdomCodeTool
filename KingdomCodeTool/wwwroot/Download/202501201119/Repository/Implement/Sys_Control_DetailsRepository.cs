namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_Control_DetailsRepository : BaseRepository<Sys_Control_Details>
    , ISys_Control_DetailsRepository
    {
    private readonly Context _context;
    public Sys_Control_DetailsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

