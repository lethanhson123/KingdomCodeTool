namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_CommandApplyPermissionsRepository : BaseRepository<Sys_CommandApplyPermissions>
    , ISys_CommandApplyPermissionsRepository
    {
    private readonly Context _context;
    public Sys_CommandApplyPermissionsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

