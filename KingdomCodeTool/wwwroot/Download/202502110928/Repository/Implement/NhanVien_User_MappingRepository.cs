namespace Repository_eHospital_DongNai_A_Dictionary.Implement
{
    public class NhanVien_User_MappingRepository : BaseRepository<NhanVien_User_Mapping>
    , INhanVien_User_MappingRepository
    {
    private readonly Context _context;
    public NhanVien_User_MappingRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

