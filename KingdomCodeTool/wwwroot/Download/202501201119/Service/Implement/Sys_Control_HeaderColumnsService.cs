namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_Control_HeaderColumnsService : BaseService<Sys_Control_HeaderColumns, ISys_Control_HeaderColumnsRepository>
    , ISys_Control_HeaderColumnsService
    {
    private readonly ISys_Control_HeaderColumnsRepository _Sys_Control_HeaderColumnsRepository;
    public Sys_Control_HeaderColumnsService(ISys_Control_HeaderColumnsRepository Sys_Control_HeaderColumnsRepository) : base(Sys_Control_HeaderColumnsRepository)
    {
    _Sys_Control_HeaderColumnsRepository = Sys_Control_HeaderColumnsRepository;
    }
    }
    }

