namespace Business.Implement
{
    public class CompanyService : BaseService<Company, ICompanyRepository>
    , ICompanyService
    {
    private readonly ICompanyRepository _CompanyRepository;
    public CompanyService(ICompanyRepository CompanyRepository) : base(CompanyRepository)
    {
    _CompanyRepository = CompanyRepository;
    }
    }
    }

