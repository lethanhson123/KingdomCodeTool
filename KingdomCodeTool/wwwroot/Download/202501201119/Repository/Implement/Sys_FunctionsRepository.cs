namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_FunctionsRepository : BaseRepository<Sys_Functions>
    , ISys_FunctionsRepository
    {
    private readonly Context _context;
    public Sys_FunctionsRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

