namespace Data_eHospital_DongNai_A_Dictionary.Context
{
	public partial class Context : DbContext
	{
		public Context()
		{
		}
		public Context(DbContextOptions<Context>
    options)
    : base(options)
    {
    }

    public virtual DbSet<NhanVien_User_Mapping> NhanVien_User_Mapping { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    if (!optionsBuilder.IsConfigured)
    {
    optionsBuilder.UseSqlServer(GlobalHelper.SQLServerConectionString);
    }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
    }

