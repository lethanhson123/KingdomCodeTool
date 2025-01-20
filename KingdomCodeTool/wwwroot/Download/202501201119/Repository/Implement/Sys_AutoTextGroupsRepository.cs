namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_AutoTextGroupsRepository : BaseRepository<Sys_AutoTextGroups>
    , ISys_AutoTextGroupsRepository
    {
    private readonly Context _context;
    public Sys_AutoTextGroupsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

