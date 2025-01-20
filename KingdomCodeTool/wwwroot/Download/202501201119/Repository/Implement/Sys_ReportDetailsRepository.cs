namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ReportDetailsRepository : BaseRepository<Sys_ReportDetails>
    , ISys_ReportDetailsRepository
    {
    private readonly Context _context;
    public Sys_ReportDetailsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

