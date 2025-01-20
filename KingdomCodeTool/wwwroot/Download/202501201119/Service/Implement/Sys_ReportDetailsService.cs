namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ReportDetailsService : BaseService<Sys_ReportDetails, ISys_ReportDetailsRepository>
    , ISys_ReportDetailsService
    {
    private readonly ISys_ReportDetailsRepository _Sys_ReportDetailsRepository;
    public Sys_ReportDetailsService(ISys_ReportDetailsRepository Sys_ReportDetailsRepository) : base(Sys_ReportDetailsRepository)
    {
    _Sys_ReportDetailsRepository = Sys_ReportDetailsRepository;
    }
    }
    }

