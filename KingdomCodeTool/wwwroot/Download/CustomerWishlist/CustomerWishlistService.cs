namespace Business.Implement
{
    public class CustomerWishlistService : BaseService<CustomerWishlist, ICustomerWishlistRepository>
    , ICustomerWishlistService
    {
    private readonly ICustomerWishlistRepository _CustomerWishlistRepository;
    public CustomerWishlistService(ICustomerWishlistRepository CustomerWishlistRepository) : base(CustomerWishlistRepository)
    {
    _CustomerWishlistRepository = CustomerWishlistRepository;
    }
    }
    }

