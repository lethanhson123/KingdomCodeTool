namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_XQService : BaseService<CLSKetQua_XQ, ICLSKetQua_XQRepository>
    , ICLSKetQua_XQService
    {
    private readonly ICLSKetQua_XQRepository _CLSKetQua_XQRepository;
    public CLSKetQua_XQService(ICLSKetQua_XQRepository CLSKetQua_XQRepository) : base(CLSKetQua_XQRepository)
    {
    _CLSKetQua_XQRepository = CLSKetQua_XQRepository;
    }
    }
    }

