namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_GroupsRepository : BaseRepository<Sys_Groups>
    , ISys_GroupsRepository
    {
    private readonly Context _context;
    public Sys_GroupsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

