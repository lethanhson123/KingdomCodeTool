namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_LanguagesService : BaseService<Sys_Languages, ISys_LanguagesRepository>
    , ISys_LanguagesService
    {
    private readonly ISys_LanguagesRepository _Sys_LanguagesRepository;
    public Sys_LanguagesService(ISys_LanguagesRepository Sys_LanguagesRepository) : base(Sys_LanguagesRepository)
    {
    _Sys_LanguagesRepository = Sys_LanguagesRepository;
    }
    }
    }

