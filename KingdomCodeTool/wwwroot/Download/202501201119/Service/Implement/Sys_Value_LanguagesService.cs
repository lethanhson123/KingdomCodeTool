namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_Value_LanguagesService : BaseService<Sys_Value_Languages, ISys_Value_LanguagesRepository>
    , ISys_Value_LanguagesService
    {
    private readonly ISys_Value_LanguagesRepository _Sys_Value_LanguagesRepository;
    public Sys_Value_LanguagesService(ISys_Value_LanguagesRepository Sys_Value_LanguagesRepository) : base(Sys_Value_LanguagesRepository)
    {
    _Sys_Value_LanguagesRepository = Sys_Value_LanguagesRepository;
    }
    }
    }

