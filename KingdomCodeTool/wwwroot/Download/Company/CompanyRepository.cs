﻿namespace Data.Repository.Implement
{
    public class CompanyRepository : BaseRepository<Company>
    , ICompanyRepository
    {
    private readonly Context _context;
    public CompanyRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }
