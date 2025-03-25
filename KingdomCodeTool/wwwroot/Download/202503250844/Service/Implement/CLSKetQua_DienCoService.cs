namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_DienCoService : BaseService<CLSKetQua_DienCo, ICLSKetQua_DienCoRepository>
    , ICLSKetQua_DienCoService
    {
    private readonly ICLSKetQua_DienCoRepository _CLSKetQua_DienCoRepository;
    public CLSKetQua_DienCoService(ICLSKetQua_DienCoRepository CLSKetQua_DienCoRepository) : base(CLSKetQua_DienCoRepository)
    {
    _CLSKetQua_DienCoRepository = CLSKetQua_DienCoRepository;
    }
    }
    }

