namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ParametersService : BaseService<Sys_Parameters, ISys_ParametersRepository>
    , ISys_ParametersService
    {
    private readonly ISys_ParametersRepository _Sys_ParametersRepository;
    public Sys_ParametersService(ISys_ParametersRepository Sys_ParametersRepository) : base(Sys_ParametersRepository)
    {
    _Sys_ParametersRepository = Sys_ParametersRepository;
    }
    }
    }

