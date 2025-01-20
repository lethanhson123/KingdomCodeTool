namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_UserGroups : BaseModel
    {
        [Key]
        public int? User_Id { get; set; }
public int? Group_Id { get; set; }

        public Sys_UserGroups()
        {
        }
    }
}

