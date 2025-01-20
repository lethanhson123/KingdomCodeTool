namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Parameters : BaseModel
    {
        [Key]
        public int? Parameter_Id { get; set; }
public string? Parameter_Code { get; set; }
public string? Parameter_Type { get; set; }
public string? Parameter_Name { get; set; }
public string? Language_Id { get; set; }
public int? DataType_Id { get; set; }
public int? Max_Length { get; set; }
public int? Default_Value_Type_Id { get; set; }
public string? Default_Value { get; set; }
public bool? Enabled { get; set; }
public bool? Is_Report_Parameter { get; set; }
public bool? Is_Database_Parameter { get; set; }
public bool? Is_Common_Formula { get; set; }
public bool? Is_Common_Parameter { get; set; }
public bool? Is_Common_MethodParameter { get; set; }
public int? Idx { get; set; }
public string? Lov_Procedure { get; set; }
public string? ComboData_Procedure { get; set; }
public string? DataGroup { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public string? Attribute3 { get; set; }
public string? Attribute4 { get; set; }
public string? Attribute5 { get; set; }

        public Sys_Parameters()
        {
        }
    }
}

