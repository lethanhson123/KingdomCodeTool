namespace Service_eHospital_DongNai_A.Implement
{
    public class ToaThuocService : BaseService<ToaThuoc, IToaThuocRepository>
    , IToaThuocService
    {
    private readonly IToaThuocRepository _ToaThuocRepository;
    public ToaThuocService(IToaThuocRepository ToaThuocRepository) : base(ToaThuocRepository)
    {
    _ToaThuocRepository = ToaThuocRepository;
    }
    }
    }

