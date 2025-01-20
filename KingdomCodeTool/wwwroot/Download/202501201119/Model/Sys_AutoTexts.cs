namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_AutoTexts : BaseModel
    {
        [Key]
        public int? AutoText_Id { get; set; }
public int? Definer_Id { get; set; }
public string? OriginString { get; set; }
public string? ReplaceString { get; set; }
public bool? IsAutoCorrect { get; set; }
public bool? ApplyToEveryone { get; set; }
public bool? Enabled { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Sys_AutoTexts()
        {
        }
    }
}

