namespace Repository_eHospital_DongNai_A.Implement
{
    public class CLSKetQuaRepository : BaseRepository<CLSKetQua>
    , ICLSKetQuaRepository
    {
    private readonly Context _context;
    public CLSKetQuaRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

