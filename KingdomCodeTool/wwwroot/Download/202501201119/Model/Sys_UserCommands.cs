namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_UserCommands : BaseModel
    {
        [Key]
        public int? User_Id { get; set; }
public int? Command_Id { get; set; }
public int? Function_Id { get; set; }
public int? Menu_Id { get; set; }

        public Sys_UserCommands()
        {
        }
    }
}

