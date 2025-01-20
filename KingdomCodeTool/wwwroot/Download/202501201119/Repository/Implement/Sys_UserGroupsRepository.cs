namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserGroupsRepository : BaseRepository<Sys_UserGroups>
    , ISys_UserGroupsRepository
    {
    private readonly Context _context;
    public Sys_UserGroupsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

