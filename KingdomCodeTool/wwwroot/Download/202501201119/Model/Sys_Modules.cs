namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Modules : BaseModel
    {
        [Key]
        public int? Module_Id { get; set; }
public string? Module_Code { get; set; }
public string? Module_Name { get; set; }
public string? Namespace { get; set; }
public string? Module_File { get; set; }
public string? Description { get; set; }
public bool? Enabled { get; set; }
public int? Total_Function { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Sys_Modules()
        {
        }
    }
}

