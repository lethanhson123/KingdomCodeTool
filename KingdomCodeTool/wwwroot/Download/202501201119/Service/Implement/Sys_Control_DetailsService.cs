namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_Control_DetailsService : BaseService<Sys_Control_Details, ISys_Control_DetailsRepository>
    , ISys_Control_DetailsService
    {
    private readonly ISys_Control_DetailsRepository _Sys_Control_DetailsRepository;
    public Sys_Control_DetailsService(ISys_Control_DetailsRepository Sys_Control_DetailsRepository) : base(Sys_Control_DetailsRepository)
    {
    _Sys_Control_DetailsRepository = Sys_Control_DetailsRepository;
    }
    }
    }

