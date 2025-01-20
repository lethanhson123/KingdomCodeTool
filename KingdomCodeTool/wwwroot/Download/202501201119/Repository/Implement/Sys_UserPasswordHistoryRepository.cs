namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_UserPasswordHistoryRepository : BaseRepository<Sys_UserPasswordHistory>
    , ISys_UserPasswordHistoryRepository
    {
    private readonly Context _context;
    public Sys_UserPasswordHistoryRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

