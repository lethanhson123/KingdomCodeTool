namespace Data.Repository.Implement
{
    public class DeliveryRepository : BaseRepository<Delivery>
    , IDeliveryRepository
    {
    private readonly Context _context;
    public DeliveryRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

