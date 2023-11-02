namespace Business.Implement
{
    public class CustomerCategoryPriceService : BaseService<CustomerCategoryPrice, ICustomerCategoryPriceRepository>
    , ICustomerCategoryPriceService
    {
    private readonly ICustomerCategoryPriceRepository _CustomerCategoryPriceRepository;
    public CustomerCategoryPriceService(ICustomerCategoryPriceRepository CustomerCategoryPriceRepository) : base(CustomerCategoryPriceRepository)
    {
    _CustomerCategoryPriceRepository = CustomerCategoryPriceRepository;
    }
    }
    }

