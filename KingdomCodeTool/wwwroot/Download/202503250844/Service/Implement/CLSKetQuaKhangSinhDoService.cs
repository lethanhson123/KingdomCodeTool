namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaKhangSinhDoService : BaseService<CLSKetQuaKhangSinhDo, ICLSKetQuaKhangSinhDoRepository>
    , ICLSKetQuaKhangSinhDoService
    {
    private readonly ICLSKetQuaKhangSinhDoRepository _CLSKetQuaKhangSinhDoRepository;
    public CLSKetQuaKhangSinhDoService(ICLSKetQuaKhangSinhDoRepository CLSKetQuaKhangSinhDoRepository) : base(CLSKetQuaKhangSinhDoRepository)
    {
    _CLSKetQuaKhangSinhDoRepository = CLSKetQuaKhangSinhDoRepository;
    }
    }
    }

