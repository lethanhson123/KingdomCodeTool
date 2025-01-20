namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ReportParametersService : BaseService<Sys_ReportParameters, ISys_ReportParametersRepository>
    , ISys_ReportParametersService
    {
    private readonly ISys_ReportParametersRepository _Sys_ReportParametersRepository;
    public Sys_ReportParametersService(ISys_ReportParametersRepository Sys_ReportParametersRepository) : base(Sys_ReportParametersRepository)
    {
    _Sys_ReportParametersRepository = Sys_ReportParametersRepository;
    }
    }
    }

