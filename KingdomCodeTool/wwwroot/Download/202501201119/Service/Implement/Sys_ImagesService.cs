namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_ImagesService : BaseService<Sys_Images, ISys_ImagesRepository>
    , ISys_ImagesService
    {
    private readonly ISys_ImagesRepository _Sys_ImagesRepository;
    public Sys_ImagesService(ISys_ImagesRepository Sys_ImagesRepository) : base(Sys_ImagesRepository)
    {
    _Sys_ImagesRepository = Sys_ImagesRepository;
    }
    }
    }

