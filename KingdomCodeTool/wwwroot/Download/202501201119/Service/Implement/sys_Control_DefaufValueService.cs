namespace Service_eHospital_DongNai_A_System.Implement
{
    public class sys_Control_DefaufValueService : BaseService<sys_Control_DefaufValue, Isys_Control_DefaufValueRepository>
    , Isys_Control_DefaufValueService
    {
    private readonly Isys_Control_DefaufValueRepository _sys_Control_DefaufValueRepository;
    public sys_Control_DefaufValueService(Isys_Control_DefaufValueRepository sys_Control_DefaufValueRepository) : base(sys_Control_DefaufValueRepository)
    {
    _sys_Control_DefaufValueRepository = sys_Control_DefaufValueRepository;
    }
    }
    }

