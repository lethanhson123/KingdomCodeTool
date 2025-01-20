namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_AutoTextUsers : BaseModel
    {
        [Key]
        public int? AutoText_Id { get; set; }
public int? User_Id { get; set; }

        public Sys_AutoTextUsers()
        {
        }
    }
}

