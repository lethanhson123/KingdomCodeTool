namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_PACSService : BaseService<CLSYeuCau_PACS, ICLSYeuCau_PACSRepository>
    , ICLSYeuCau_PACSService
    {
    private readonly ICLSYeuCau_PACSRepository _CLSYeuCau_PACSRepository;
    public CLSYeuCau_PACSService(ICLSYeuCau_PACSRepository CLSYeuCau_PACSRepository) : base(CLSYeuCau_PACSRepository)
    {
    _CLSYeuCau_PACSRepository = CLSYeuCau_PACSRepository;
    }
    }
    }

