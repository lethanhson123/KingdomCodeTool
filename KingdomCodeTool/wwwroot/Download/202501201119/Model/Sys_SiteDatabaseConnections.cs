namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_SiteDatabaseConnections : BaseModel
    {
        [Key]
        public string? SiteCode { get; set; }
public string? SiteName { get; set; }
public string? SiteConnectionCode { get; set; }
public bool? Enabled { get; set; }

        public Sys_SiteDatabaseConnections()
        {
        }
    }
}

