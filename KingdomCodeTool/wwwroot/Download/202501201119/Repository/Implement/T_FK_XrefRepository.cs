namespace Repository_eHospital_DongNai_A_System.Implement
{
    public class T_FK_XrefRepository : BaseRepository<T_FK_Xref>
    , IT_FK_XrefRepository
    {
    private readonly Context _context;
    public T_FK_XrefRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

