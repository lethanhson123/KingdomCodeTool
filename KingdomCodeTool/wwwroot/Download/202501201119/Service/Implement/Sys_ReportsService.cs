namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ReportsService : BaseService<Sys_Reports, ISys_ReportsRepository>
    , ISys_ReportsService
    {
    private readonly ISys_ReportsRepository _Sys_ReportsRepository;
    public Sys_ReportsService(ISys_ReportsRepository Sys_ReportsRepository) : base(Sys_ReportsRepository)
    {
    _Sys_ReportsRepository = Sys_ReportsRepository;
    }
    }
    }

