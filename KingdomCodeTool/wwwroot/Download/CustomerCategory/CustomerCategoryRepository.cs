namespace Data.Repository.Implement
{
    public class CustomerCategoryRepository : BaseRepository<CustomerCategory>
    , ICustomerCategoryRepository
    {
    private readonly Context _context;
    public CustomerCategoryRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

