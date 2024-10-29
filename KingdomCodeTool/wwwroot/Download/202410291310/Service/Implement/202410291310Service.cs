namespace Service.Implement
{
    public class 202410291310Service : BaseService<202410291310, I202410291310Repository>
    , I202410291310Service
    {
    private readonly I202410291310Repository _202410291310Repository;
    public 202410291310Service(I202410291310Repository 202410291310Repository) : base(202410291310Repository)
    {
    _202410291310Repository = 202410291310Repository;
    }
    }
    }

