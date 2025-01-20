namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_DomainsRepository : BaseRepository<Sys_Domains>
    , ISys_DomainsRepository
    {
    private readonly Context _context;
    public Sys_DomainsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

