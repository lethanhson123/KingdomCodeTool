namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_ReportParameters : BaseModel
    {
        [Key]
        public int? ReportParameter_Id { get; set; }
public int? Report_Id { get; set; }
public int? Parameter_Id { get; set; }
public int? Idx { get; set; }
public bool? Private_Parameter_Code { get; set; }
public string? Report_Parameter_Code { get; set; }
public bool? Private_Parameter_Name { get; set; }
public string? Parameter_Name { get; set; }
public string? Language_Id { get; set; }
public bool? Crlf { get; set; }
public int? Max_Length { get; set; }
public int? Default_Value_Type_Id { get; set; }
public string? Default_Value { get; set; }
public bool? Is_Report_Parameter { get; set; }
public bool? Is_Database_Parameter { get; set; }
public bool? ReadOnly { get; set; }
public bool? Enabled { get; set; }
public bool? IsNotNull { get; set; }
public int? ControlType_Id { get; set; }
public bool? Multiline { get; set; }
public int? Width { get; set; }
public int? Height { get; set; }
public bool? Private_DataGroup { get; set; }
public string? DataGroup { get; set; }
public bool? SaveDefaultValue { get; set; }
public int? PrimaryParameterIdx { get; set; }
public int? RelationParameterIdx { get; set; }
public string? PrimaryFieldName { get; set; }
public string? RelationFieldName { get; set; }
public bool? ReQueryData { get; set; }
public int? Filter_Value_Type_Id { get; set; }
public string? Filter_Value { get; set; }
public bool? LovEnabled { get; set; }
public bool? LovPrivate_DataGroup { get; set; }
public string? LovDataGroup { get; set; }
public bool? LovUseSystemFunction { get; set; }
public bool? Visibled { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public string? Attribute3 { get; set; }
public string? Attribute4 { get; set; }
public string? Attribute5 { get; set; }
public bool? SetReportFileBySelectedValue { get; set; }
public bool? ComboBox_ReturnValue { get; set; }
public bool? ComboBox_ReturnText { get; set; }

        public Sys_ReportParameters()
        {
        }
    }
}

