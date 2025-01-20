namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Domains : BaseModel
    {
        [Key]
        public int? Domain_Id { get; set; }
public string? Domain_Code { get; set; }
public string? Domain_Name { get; set; }
public int? Parent_Id { get; set; }
public bool? Enabled { get; set; }
public string? Description { get; set; }

        public Sys_Domains()
        {
        }
    }
}

