namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class Sys_DataTypesRepository : BaseRepository<Sys_DataTypes>
    , ISys_DataTypesRepository
    {
    private readonly Context _context;
    public Sys_DataTypesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

