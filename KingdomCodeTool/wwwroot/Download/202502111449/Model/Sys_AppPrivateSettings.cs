namespace Data_eHospital_DongNai_A_Config.Model
{
    public partial class Sys_AppPrivateSettings : BaseModel
    {
        [Key]
        public int? Setting_Id { get; set; }
public string? Group_Code { get; set; }
public string? Code { get; set; }
public int? User_Id { get; set; }
public string? Computer { get; set; }
public string? Value { get; set; }
public string? Description { get; set; }
public DateTime? CreationDate { get; set; }
public int? CreatedBy { get; set; }
public DateTime? LastUpdateDate { get; set; }
public int? LastUpdatedBy { get; set; }

        public Sys_AppPrivateSettings()
        {
        }
    }
}

