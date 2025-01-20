namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Users : BaseModel
    {
        [Key]
        public int? User_Id { get; set; }
public string? User_Code { get; set; }
public string? User_Name { get; set; }
public string? Language_Id { get; set; }
public int? Domain_Id { get; set; }
public string? User_Password { get; set; }
public bool? Suspend { get; set; }
public string? User_Position { get; set; }
public bool? Allow_Change_Password { get; set; }
public int? Expiration_Days { get; set; }
public DateTime? Expiration_Date { get; set; }
public bool? Encryption_Password { get; set; }
public string? EmailAddress { get; set; }
public string? PhoneNumber { get; set; }
public string? FaxNumber { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public DateTime? Login_Time { get; set; }
public string? Login_Hostname { get; set; }
public bool? IsLogin { get; set; }
public DateTime? Last_Login_Time { get; set; }
public string? Last_Login_Hostname { get; set; }
public int? MinPasswordLen { get; set; }
public bool? StrongPassword { get; set; }
public string? Latin_Name { get; set; }
public string? UserOption1 { get; set; }
public string? UserOption2 { get; set; }
public string? UserOption3 { get; set; }
public string? UserOption4 { get; set; }
public string? UserOption5 { get; set; }
public string? UserOption6 { get; set; }
public string? UserOption7 { get; set; }
public string? UserOption8 { get; set; }
public string? UserOption9 { get; set; }
public bool? TrangThaiSuspend { get; set; }

        public Sys_Users()
        {
        }
    }
}

