namespace Service_eHospital_DongNai_A_System.Implement
{
    public class idxService : BaseService<idx, IidxRepository>
    , IidxService
    {
    private readonly IidxRepository _idxRepository;
    public idxService(IidxRepository idxRepository) : base(idxRepository)
    {
    _idxRepository = idxRepository;
    }
    }
    }

