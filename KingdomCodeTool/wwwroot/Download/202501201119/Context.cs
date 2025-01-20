namespace Data_eHospital_DongNai_A_System.Context
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

    public virtual DbSet<idx> idx { get; set; }
public virtual DbSet<Log_UpdateInformation> Log_UpdateInformation { get; set; }
public virtual DbSet<Sys_AutoTextGroups> Sys_AutoTextGroups { get; set; }
public virtual DbSet<Sys_AutoTexts> Sys_AutoTexts { get; set; }
public virtual DbSet<Sys_AutoTextSettings> Sys_AutoTextSettings { get; set; }
public virtual DbSet<Sys_AutoTextUsers> Sys_AutoTextUsers { get; set; }
public virtual DbSet<Sys_CommandApplyPermissions> Sys_CommandApplyPermissions { get; set; }
public virtual DbSet<Sys_Commands> Sys_Commands { get; set; }
public virtual DbSet<Sys_Computers> Sys_Computers { get; set; }
public virtual DbSet<Sys_Configurations> Sys_Configurations { get; set; }
public virtual DbSet<sys_Control_DefaufValue> sys_Control_DefaufValue { get; set; }
public virtual DbSet<Sys_Control_Details> Sys_Control_Details { get; set; }
public virtual DbSet<Sys_Control_HeaderColumns> Sys_Control_HeaderColumns { get; set; }
public virtual DbSet<Sys_Controls> Sys_Controls { get; set; }
public virtual DbSet<Sys_ControlTypes> Sys_ControlTypes { get; set; }
public virtual DbSet<Sys_DataTypes> Sys_DataTypes { get; set; }
public virtual DbSet<Sys_Domains> Sys_Domains { get; set; }
public virtual DbSet<Sys_Functions> Sys_Functions { get; set; }
public virtual DbSet<Sys_GroupCommands> Sys_GroupCommands { get; set; }
public virtual DbSet<Sys_GroupMenus> Sys_GroupMenus { get; set; }
public virtual DbSet<Sys_Groups> Sys_Groups { get; set; }
public virtual DbSet<Sys_Images> Sys_Images { get; set; }
public virtual DbSet<Sys_Languages> Sys_Languages { get; set; }
public virtual DbSet<Sys_LoginSessions> Sys_LoginSessions { get; set; }
public virtual DbSet<Sys_Menus> Sys_Menus { get; set; }
public virtual DbSet<Sys_Modules> Sys_Modules { get; set; }
public virtual DbSet<Sys_Parameters> Sys_Parameters { get; set; }
public virtual DbSet<Sys_ReportDetails> Sys_ReportDetails { get; set; }
public virtual DbSet<Sys_ReportParameters> Sys_ReportParameters { get; set; }
public virtual DbSet<Sys_Reports> Sys_Reports { get; set; }
public virtual DbSet<Sys_SiteDatabaseConnections> Sys_SiteDatabaseConnections { get; set; }
public virtual DbSet<Sys_UserCommands> Sys_UserCommands { get; set; }
public virtual DbSet<Sys_UserGroups> Sys_UserGroups { get; set; }
public virtual DbSet<Sys_UserMenus> Sys_UserMenus { get; set; }
public virtual DbSet<Sys_UserPasswordHistory> Sys_UserPasswordHistory { get; set; }
public virtual DbSet<Sys_Users> Sys_Users { get; set; }
public virtual DbSet<Sys_Value_Languages> Sys_Value_Languages { get; set; }
public virtual DbSet<T_FK_Xref> T_FK_Xref { get; set; }

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

