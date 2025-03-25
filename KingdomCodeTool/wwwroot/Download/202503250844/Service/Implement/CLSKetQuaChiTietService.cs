namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaChiTietService : BaseService<CLSKetQuaChiTiet, ICLSKetQuaChiTietRepository>
    , ICLSKetQuaChiTietService
    {
    private readonly ICLSKetQuaChiTietRepository _CLSKetQuaChiTietRepository;
    public CLSKetQuaChiTietService(ICLSKetQuaChiTietRepository CLSKetQuaChiTietRepository) : base(CLSKetQuaChiTietRepository)
    {
    _CLSKetQuaChiTietRepository = CLSKetQuaChiTietRepository;
    }
    }
    }

