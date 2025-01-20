namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_UserMenus : BaseModel
    {
        [Key]
        public int? User_Id { get; set; }
public int? Menu_Id { get; set; }

        public Sys_UserMenus()
        {
        }
    }
}

