namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class idxRepository : BaseRepository<idx>
    , IidxRepository
    {
    private readonly Context _context;
    public idxRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

