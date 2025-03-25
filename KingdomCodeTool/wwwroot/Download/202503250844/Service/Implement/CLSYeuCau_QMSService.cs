namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_QMSService : BaseService<CLSYeuCau_QMS, ICLSYeuCau_QMSRepository>
    , ICLSYeuCau_QMSService
    {
    private readonly ICLSYeuCau_QMSRepository _CLSYeuCau_QMSRepository;
    public CLSYeuCau_QMSService(ICLSYeuCau_QMSRepository CLSYeuCau_QMSRepository) : base(CLSYeuCau_QMSRepository)
    {
    _CLSYeuCau_QMSRepository = CLSYeuCau_QMSRepository;
    }
    }
    }

