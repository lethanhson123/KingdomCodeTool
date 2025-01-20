namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_UserPasswordHistory : BaseModel
    {
        [Key]
        public int? ID { get; set; }
public int? User_Id { get; set; }
public string? ChangedDate { get; set; }
public DateTime? ChangedDateTime { get; set; }
public string? ExpirationDate { get; set; }
public string? User_Password { get; set; }

        public Sys_UserPasswordHistory()
        {
        }
    }
}

