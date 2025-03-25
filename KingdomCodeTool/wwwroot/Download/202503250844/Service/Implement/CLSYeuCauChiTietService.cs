namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSYeuCauChiTietService : BaseService<CLSYeuCauChiTiet, ICLSYeuCauChiTietRepository>
    , ICLSYeuCauChiTietService
    {
    private readonly ICLSYeuCauChiTietRepository _CLSYeuCauChiTietRepository;
    public CLSYeuCauChiTietService(ICLSYeuCauChiTietRepository CLSYeuCauChiTietRepository) : base(CLSYeuCauChiTietRepository)
    {
    _CLSYeuCauChiTietRepository = CLSYeuCauChiTietRepository;
    }
    }
    }

