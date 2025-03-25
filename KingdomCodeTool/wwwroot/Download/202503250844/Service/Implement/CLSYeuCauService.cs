namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSYeuCauService : BaseService<CLSYeuCau, ICLSYeuCauRepository>
    , ICLSYeuCauService
    {
    private readonly ICLSYeuCauRepository _CLSYeuCauRepository;
    public CLSYeuCauService(ICLSYeuCauRepository CLSYeuCauRepository) : base(CLSYeuCauRepository)
    {
    _CLSYeuCauRepository = CLSYeuCauRepository;
    }
    }
    }

