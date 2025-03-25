namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_SieuAmTimService : BaseService<CLSKetQua_SieuAmTim, ICLSKetQua_SieuAmTimRepository>
    , ICLSKetQua_SieuAmTimService
    {
    private readonly ICLSKetQua_SieuAmTimRepository _CLSKetQua_SieuAmTimRepository;
    public CLSKetQua_SieuAmTimService(ICLSKetQua_SieuAmTimRepository CLSKetQua_SieuAmTimRepository) : base(CLSKetQua_SieuAmTimRepository)
    {
    _CLSKetQua_SieuAmTimRepository = CLSKetQua_SieuAmTimRepository;
    }
    }
    }

