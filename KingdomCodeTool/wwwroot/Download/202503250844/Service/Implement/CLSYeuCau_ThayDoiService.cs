namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSYeuCau_ThayDoiService : BaseService<CLSYeuCau_ThayDoi, ICLSYeuCau_ThayDoiRepository>
    , ICLSYeuCau_ThayDoiService
    {
    private readonly ICLSYeuCau_ThayDoiRepository _CLSYeuCau_ThayDoiRepository;
    public CLSYeuCau_ThayDoiService(ICLSYeuCau_ThayDoiRepository CLSYeuCau_ThayDoiRepository) : base(CLSYeuCau_ThayDoiRepository)
    {
    _CLSYeuCau_ThayDoiRepository = CLSYeuCau_ThayDoiRepository;
    }
    }
    }

