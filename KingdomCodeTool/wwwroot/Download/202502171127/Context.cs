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

    public virtual DbSet<XML1_CV130> XML1_CV130 { get; set; }
public virtual DbSet<XML10_CV130> XML10_CV130 { get; set; }
public virtual DbSet<XML11_CV130> XML11_CV130 { get; set; }
public virtual DbSet<XML12_CV130> XML12_CV130 { get; set; }
public virtual DbSet<XML13_CV130> XML13_CV130 { get; set; }
public virtual DbSet<XML14_CV130> XML14_CV130 { get; set; }
public virtual DbSet<XML15_CV130> XML15_CV130 { get; set; }
public virtual DbSet<XML2_CV130> XML2_CV130 { get; set; }
public virtual DbSet<XML3_CV130> XML3_CV130 { get; set; }
public virtual DbSet<XML4_CV130> XML4_CV130 { get; set; }
public virtual DbSet<XML5_CV130> XML5_CV130 { get; set; }
public virtual DbSet<XML6_CV130> XML6_CV130 { get; set; }
public virtual DbSet<XML7_CV130> XML7_CV130 { get; set; }
public virtual DbSet<XML8_CV130> XML8_CV130 { get; set; }

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

