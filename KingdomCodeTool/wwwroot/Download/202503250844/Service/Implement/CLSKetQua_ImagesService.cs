namespace Service_eHospital_DongNai_A.Implement
{
    public class CLSKetQua_ImagesService : BaseService<CLSKetQua_Images, ICLSKetQua_ImagesRepository>
    , ICLSKetQua_ImagesService
    {
    private readonly ICLSKetQua_ImagesRepository _CLSKetQua_ImagesRepository;
    public CLSKetQua_ImagesService(ICLSKetQua_ImagesRepository CLSKetQua_ImagesRepository) : base(CLSKetQua_ImagesRepository)
    {
    _CLSKetQua_ImagesRepository = CLSKetQua_ImagesRepository;
    }
    }
    }

