namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_DomainsService : BaseService<Sys_Domains, ISys_DomainsRepository>
    , ISys_DomainsService
    {
    private readonly ISys_DomainsRepository _Sys_DomainsRepository;
    public Sys_DomainsService(ISys_DomainsRepository Sys_DomainsRepository) : base(Sys_DomainsRepository)
    {
    _Sys_DomainsRepository = Sys_DomainsRepository;
    }
    }
    }

