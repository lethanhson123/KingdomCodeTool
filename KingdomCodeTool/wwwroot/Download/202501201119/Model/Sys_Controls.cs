namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Controls : BaseModel
    {
        [Key]
        public int? Control_Id { get; set; }
public string? Project_Name { get; set; }
public string? Form_Name { get; set; }
public string? Control_Type { get; set; }
public string? Control_Name { get; set; }
public string? Table_Name { get; set; }
public string? Other_Key { get; set; }
public string? Container_Name { get; set; }
public int? Idx { get; set; }
public bool? Lov_Available { get; set; }
public string? Lov_DataGroup { get; set; }
public string? Lov_Procedure { get; set; }
public string? Lov_Control_Name_Desc { get; set; }
public string? FontName { get; set; }
public int? FontSize { get; set; }
public string? FontStyle { get; set; }
public int? BorderStyle { get; set; }
public int? ControlLength { get; set; }
public bool? IsDateType { get; set; }
public bool? IsNumericType { get; set; }
public bool? Updating { get; set; }

        public Sys_Controls()
        {
        }
    }
}

