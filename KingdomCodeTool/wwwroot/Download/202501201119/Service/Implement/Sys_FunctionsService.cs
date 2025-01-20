namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_FunctionsService : BaseService<Sys_Functions, ISys_FunctionsRepository>
    , ISys_FunctionsService
    {
    private readonly ISys_FunctionsRepository _Sys_FunctionsRepository;
    public Sys_FunctionsService(ISys_FunctionsRepository Sys_FunctionsRepository) : base(Sys_FunctionsRepository)
    {
    _Sys_FunctionsRepository = Sys_FunctionsRepository;
    }
    }
    }

