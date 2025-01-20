namespace Service_eHospital_DongNai_A_System.Implement
{
    public class T_FK_XrefService : BaseService<T_FK_Xref, IT_FK_XrefRepository>
    , IT_FK_XrefService
    {
    private readonly IT_FK_XrefRepository _T_FK_XrefRepository;
    public T_FK_XrefService(IT_FK_XrefRepository T_FK_XrefRepository) : base(T_FK_XrefRepository)
    {
    _T_FK_XrefRepository = T_FK_XrefRepository;
    }
    }
    }

