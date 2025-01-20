namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_AutoTextGroups : BaseModel
    {
        [Key]
        public int? AutoText_Id { get; set; }
public int? Group_Id { get; set; }

        public Sys_AutoTextGroups()
        {
        }
    }
}

