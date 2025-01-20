namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_CommandApplyPermissions : BaseModel
    {
        [Key]
        public int? Command_Id { get; set; }
public int? Function_Id { get; set; }
public int? Menu_Id { get; set; }

        public Sys_CommandApplyPermissions()
        {
        }
    }
}

