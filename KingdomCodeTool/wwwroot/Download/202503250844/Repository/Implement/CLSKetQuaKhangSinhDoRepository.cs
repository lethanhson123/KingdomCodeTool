namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaKhangSinhDoRepository : BaseRepository<CLSKetQuaKhangSinhDo>
    , ICLSKetQuaKhangSinhDoRepository
    {
    private readonly Context _context;
    public CLSKetQuaKhangSinhDoRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

