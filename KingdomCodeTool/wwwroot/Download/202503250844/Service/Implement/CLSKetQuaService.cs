namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaService : BaseService<CLSKetQua, ICLSKetQuaRepository>
    , ICLSKetQuaService
    {
    private readonly ICLSKetQuaRepository _CLSKetQuaRepository;
    public CLSKetQuaService(ICLSKetQuaRepository CLSKetQuaRepository) : base(CLSKetQuaRepository)
    {
    _CLSKetQuaRepository = CLSKetQuaRepository;
    }
    }
    }

