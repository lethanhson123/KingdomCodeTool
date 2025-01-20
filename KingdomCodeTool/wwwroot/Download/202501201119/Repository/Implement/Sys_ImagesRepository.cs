namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_ImagesRepository : BaseRepository<Sys_Images>
    , ISys_ImagesRepository
    {
    private readonly Context _context;
    public Sys_ImagesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

