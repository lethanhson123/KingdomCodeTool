namespace Data_eHospital_DongNai_A.Context
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

    public virtual DbSet<KhamBenh_VaoVien> KhamBenh_VaoVien { get; set; }
public virtual DbSet<KhamBenh_VaoVien_SanKhoa> KhamBenh_VaoVien_SanKhoa { get; set; }

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

