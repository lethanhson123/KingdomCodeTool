namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Computers : BaseModel
    {
        [Key]
        public int? Computer_Id { get; set; }
public string? ComputerName { get; set; }
public string? IPAddress { get; set; }
public DateTime? LastLoginTime { get; set; }
public bool? IsLogin { get; set; }
public DateTime? LoginTime { get; set; }
public string? UserName { get; set; }
public string? UserDomainName { get; set; }

        public Sys_Computers()
        {
        }
    }
}

