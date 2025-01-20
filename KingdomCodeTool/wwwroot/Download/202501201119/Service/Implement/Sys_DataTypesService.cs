namespace Service_eHospital_DongNai_A_System.Implement
{
    public class Sys_DataTypesService : BaseService<Sys_DataTypes, ISys_DataTypesRepository>
    , ISys_DataTypesService
    {
    private readonly ISys_DataTypesRepository _Sys_DataTypesRepository;
    public Sys_DataTypesService(ISys_DataTypesRepository Sys_DataTypesRepository) : base(Sys_DataTypesRepository)
    {
    _Sys_DataTypesRepository = Sys_DataTypesRepository;
    }
    }
    }

