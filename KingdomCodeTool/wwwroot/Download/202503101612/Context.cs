namespace Data.Context
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

    public virtual DbSet<DanhMucThongKe> DanhMucThongKe { get; set; }
public virtual DbSet<ThongKe> ThongKe { get; set; }
public virtual DbSet<ThongKeChiTiet> ThongKeChiTiet { get; set; }

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

