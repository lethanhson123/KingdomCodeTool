namespace Data.Repository.Implement
{
    public class CustomerCategoryPriceRepository : BaseRepository<CustomerCategoryPrice>
    , ICustomerCategoryPriceRepository
    {
    private readonly Context _context;
    public CustomerCategoryPriceRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

