namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Log_UpdateInformationRepository : BaseRepository<Log_UpdateInformation>
    , ILog_UpdateInformationRepository
    {
    private readonly Context _context;
    public Log_UpdateInformationRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

