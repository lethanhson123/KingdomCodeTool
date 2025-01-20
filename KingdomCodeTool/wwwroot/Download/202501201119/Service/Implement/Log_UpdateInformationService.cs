namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Log_UpdateInformationService : BaseService<Log_UpdateInformation, ILog_UpdateInformationRepository>
    , ILog_UpdateInformationService
    {
    private readonly ILog_UpdateInformationRepository _Log_UpdateInformationRepository;
    public Log_UpdateInformationService(ILog_UpdateInformationRepository Log_UpdateInformationRepository) : base(Log_UpdateInformationRepository)
    {
    _Log_UpdateInformationRepository = Log_UpdateInformationRepository;
    }
    }
    }

