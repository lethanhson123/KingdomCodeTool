namespace Service_eHospital_DongNai_A_Dictionary.Implement
{
    public class NhanVien_User_MappingService : BaseService<NhanVien_User_Mapping, INhanVien_User_MappingRepository>
    , INhanVien_User_MappingService
    {
    private readonly INhanVien_User_MappingRepository _NhanVien_User_MappingRepository;
    public NhanVien_User_MappingService(INhanVien_User_MappingRepository NhanVien_User_MappingRepository) : base(NhanVien_User_MappingRepository)
    {
    _NhanVien_User_MappingRepository = NhanVien_User_MappingRepository;
    }
    }
    }

