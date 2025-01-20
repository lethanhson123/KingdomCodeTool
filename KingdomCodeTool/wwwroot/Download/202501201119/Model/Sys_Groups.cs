namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Groups : BaseModel
    {
        [Key]
        public int? Group_Id { get; set; }
public string? Group_Code { get; set; }
public string? Group_Name { get; set; }
public string? Language_Id { get; set; }
public int? Domain_Id { get; set; }
public bool? Admin { get; set; }
public bool? DefaultGroup { get; set; }
public int? Member { get; set; }
public string? Description { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public string? Latin_Name { get; set; }

        public Sys_Groups()
        {
        }
    }
}

