namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_ImagesRepository : BaseRepository<CLSKetQua_Images>
    , ICLSKetQua_ImagesRepository
    {
    private readonly Context _context;
    public CLSKetQua_ImagesRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

