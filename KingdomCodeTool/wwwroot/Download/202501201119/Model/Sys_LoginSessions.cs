namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_LoginSessions : BaseModel
    {
        [Key]
        public int? LoginSession_Id { get; set; }
public int? User_Id { get; set; }
public string? HostName { get; set; }
public string? IPAddress { get; set; }
public string? NOS_UserName { get; set; }
public string? NOS_DomainName { get; set; }
public int? ProcessId { get; set; }
public DateTime? LoginTime { get; set; }
public DateTime? LogoutTime { get; set; }

        public Sys_LoginSessions()
        {
        }
    }
}

