namespace Business.Implement
{
    public class DeliveryService : BaseService<Delivery, IDeliveryRepository>
    , IDeliveryService
    {
    private readonly IDeliveryRepository _DeliveryRepository;
    public DeliveryService(IDeliveryRepository DeliveryRepository) : base(DeliveryRepository)
    {
    _DeliveryRepository = DeliveryRepository;
    }
    }
    }

