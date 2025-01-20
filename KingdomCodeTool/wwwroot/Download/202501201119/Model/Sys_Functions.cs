namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Functions : BaseModel
    {
        [Key]
        public int? Function_Id { get; set; }
public string? Function_Name { get; set; }
public string? Function_Class { get; set; }
public int? Module_Id { get; set; }
public bool? System_Function { get; set; }
public bool? Report_Function { get; set; }
public string? Description { get; set; }
public bool? Enabled { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Sys_Functions()
        {
        }
    }
}

