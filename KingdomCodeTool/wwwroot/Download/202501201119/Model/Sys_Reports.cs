namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Reports : BaseModel
    {
        [Key]
        public int? Report_Id { get; set; }
public string? Report_Code { get; set; }
public string? Report_Name { get; set; }
public string? Report_File { get; set; }
public int? PaperSize_Id { get; set; }
public bool? Landscape_Orientation { get; set; }
public bool? AllowPreview { get; set; }
public bool? AllowPrintOut { get; set; }
public bool? Pull_ReportData { get; set; }
public string? Package_Name { get; set; }
public string? Procedure_Name { get; set; }
public string? ReportFormNumber { get; set; }
public string? ReportFormVersion { get; set; }
public string? ReportFormEffectedDate { get; set; }
public bool? Enabled { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public string? Attribute3 { get; set; }
public string? Attribute4 { get; set; }
public string? Attribute5 { get; set; }
public string? Attribute6 { get; set; }
public bool? ExportToDatabase { get; set; }
public bool? ExecDirectToDatabase { get; set; }
public bool? IsMultiSiteReport { get; set; }
public string? DefaultSiteCode { get; set; }

        public Sys_Reports()
        {
        }
    }
}

