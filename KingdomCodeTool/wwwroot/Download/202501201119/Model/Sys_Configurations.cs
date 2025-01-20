namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Configurations : BaseModel
    {
        [Key]
        public bool? AllowNullUserPassword { get; set; }
public bool? ChangePasswordOnFirstLogon { get; set; }
public bool? IsUsingStrongPassword { get; set; }
public int? UserPasswordExpiryDay { get; set; }
public int? TimesOfHistoryPasswordNotAllow { get; set; }
public int? MinPasswordLen { get; set; }
public int? PasswordExpiredNotifyDay { get; set; }

        public Sys_Configurations()
        {
        }
    }
}

