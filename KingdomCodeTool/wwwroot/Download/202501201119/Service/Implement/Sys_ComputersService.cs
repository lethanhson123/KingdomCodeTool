namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ComputersService : BaseService<Sys_Computers, ISys_ComputersRepository>
    , ISys_ComputersService
    {
    private readonly ISys_ComputersRepository _Sys_ComputersRepository;
    public Sys_ComputersService(ISys_ComputersRepository Sys_ComputersRepository) : base(Sys_ComputersRepository)
    {
    _Sys_ComputersRepository = Sys_ComputersRepository;
    }
    }
    }

