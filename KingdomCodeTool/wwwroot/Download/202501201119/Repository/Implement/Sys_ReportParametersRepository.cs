namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ReportParametersRepository : BaseRepository<Sys_ReportParameters>
    , ISys_ReportParametersRepository
    {
    private readonly Context _context;
    public Sys_ReportParametersRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

