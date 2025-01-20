namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_SiteDatabaseConnectionsService : BaseService<Sys_SiteDatabaseConnections, ISys_SiteDatabaseConnectionsRepository>
    , ISys_SiteDatabaseConnectionsService
    {
    private readonly ISys_SiteDatabaseConnectionsRepository _Sys_SiteDatabaseConnectionsRepository;
    public Sys_SiteDatabaseConnectionsService(ISys_SiteDatabaseConnectionsRepository Sys_SiteDatabaseConnectionsRepository) : base(Sys_SiteDatabaseConnectionsRepository)
    {
    _Sys_SiteDatabaseConnectionsRepository = Sys_SiteDatabaseConnectionsRepository;
    }
    }
    }

