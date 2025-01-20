namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_ReportDetails : BaseModel
    {
        [Key]
        public int? ReportDetail_Id { get; set; }
public int? Report_Id { get; set; }
public int? Idx { get; set; }
public string? SubReport_Name { get; set; }
public string? Procedure_Name { get; set; }
public bool? Enabled { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public string? Attribute3 { get; set; }
public string? Attribute4 { get; set; }
public string? Attribute5 { get; set; }

        public Sys_ReportDetails()
        {
        }
    }
}

