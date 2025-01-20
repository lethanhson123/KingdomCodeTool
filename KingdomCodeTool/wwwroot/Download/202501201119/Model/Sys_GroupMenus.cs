namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_GroupMenus : BaseModel
    {
        [Key]
        public int? Group_Id { get; set; }
public int? Menu_Id { get; set; }

        public Sys_GroupMenus()
        {
        }
    }
}

