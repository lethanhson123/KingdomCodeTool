namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Languages : BaseModel
    {
        [Key]
        public string? Language_Id { get; set; }
public string? Language_Name { get; set; }
public string? Language_Name_En { get; set; }
public string? Language_Name_Ru { get; set; }
public bool? Enabled { get; set; }

        public Sys_Languages()
        {
        }
    }
}

