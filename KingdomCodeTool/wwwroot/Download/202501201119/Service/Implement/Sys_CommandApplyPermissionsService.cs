namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_CommandApplyPermissionsService : BaseService<Sys_CommandApplyPermissions, ISys_CommandApplyPermissionsRepository>
    , ISys_CommandApplyPermissionsService
    {
    private readonly ISys_CommandApplyPermissionsRepository _Sys_CommandApplyPermissionsRepository;
    public Sys_CommandApplyPermissionsService(ISys_CommandApplyPermissionsRepository Sys_CommandApplyPermissionsRepository) : base(Sys_CommandApplyPermissionsRepository)
    {
    _Sys_CommandApplyPermissionsRepository = Sys_CommandApplyPermissionsRepository;
    }
    }
    }

