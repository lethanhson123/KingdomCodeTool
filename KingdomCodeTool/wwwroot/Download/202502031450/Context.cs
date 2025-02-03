namespace Data_eHospital_DongNai_A_Config.Context
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

    public virtual DbSet<BenhSu> BenhSu { get; set; }
public virtual DbSet<BenhSu_User_DichVu_Permissions> BenhSu_User_DichVu_Permissions { get; set; }
public virtual DbSet<BenhSuDefinitions> BenhSuDefinitions { get; set; }
public virtual DbSet<Log_UpdateInformation> Log_UpdateInformation { get; set; }
public virtual DbSet<Sys_AppPrivateSettingItems> Sys_AppPrivateSettingItems { get; set; }
public virtual DbSet<Sys_AppPrivateSettingPermissions> Sys_AppPrivateSettingPermissions { get; set; }
public virtual DbSet<Sys_AppPrivateSettings> Sys_AppPrivateSettings { get; set; }
public virtual DbSet<Sys_AppSettings> Sys_AppSettings { get; set; }
public virtual DbSet<Sys_ComboDefinitions> Sys_ComboDefinitions { get; set; }
public virtual DbSet<Sys_Configs> Sys_Configs { get; set; }
public virtual DbSet<Sys_Constants> Sys_Constants { get; set; }
public virtual DbSet<Sys_HistoryDefines> Sys_HistoryDefines { get; set; }
public virtual DbSet<Sys_List_SourceFile> Sys_List_SourceFile { get; set; }
public virtual DbSet<Sys_LovDefinitions> Sys_LovDefinitions { get; set; }
public virtual DbSet<Sys_ModifySource_Client> Sys_ModifySource_Client { get; set; }
public virtual DbSet<Sys_ModifySource_Computer> Sys_ModifySource_Computer { get; set; }
public virtual DbSet<Sys_ModifySource_Server> Sys_ModifySource_Server { get; set; }
public virtual DbSet<Sys_Operators> Sys_Operators { get; set; }
public virtual DbSet<Sys_SearchDefinitions> Sys_SearchDefinitions { get; set; }
public virtual DbSet<test> test { get; set; }

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

