namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_UsersService : BaseService<Sys_Users, ISys_UsersRepository>
    , ISys_UsersService
    {
    private readonly ISys_UsersRepository _Sys_UsersRepository;
    public Sys_UsersService(ISys_UsersRepository Sys_UsersRepository) : base(Sys_UsersRepository)
    {
    _Sys_UsersRepository = Sys_UsersRepository;
    }
    }
    }

