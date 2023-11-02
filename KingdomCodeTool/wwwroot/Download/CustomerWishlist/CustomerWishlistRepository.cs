namespace Data.Repository.Implement
{
    public class CustomerWishlistRepository : BaseRepository<CustomerWishlist>
    , ICustomerWishlistRepository
    {
    private readonly Context _context;
    public CustomerWishlistRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

