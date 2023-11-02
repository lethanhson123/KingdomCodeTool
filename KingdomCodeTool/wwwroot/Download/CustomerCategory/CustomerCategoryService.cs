namespace Business.Implement
{
    public class CustomerCategoryService : BaseService<CustomerCategory, ICustomerCategoryRepository>
    , ICustomerCategoryService
    {
    private readonly ICustomerCategoryRepository _CustomerCategoryRepository;
    public CustomerCategoryService(ICustomerCategoryRepository CustomerCategoryRepository) : base(CustomerCategoryRepository)
    {
    _CustomerCategoryRepository = CustomerCategoryRepository;
    }
    }
    }

