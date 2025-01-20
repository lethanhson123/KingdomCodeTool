namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_AutoTextSettings : BaseModel
    {
        [Key]
        public int? AutoTextSetting_Id { get; set; }
public string? FormFullName { get; set; }
public string? ListOfControlName { get; set; }
public bool? Enabled { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Sys_AutoTextSettings()
        {
        }
    }
}

