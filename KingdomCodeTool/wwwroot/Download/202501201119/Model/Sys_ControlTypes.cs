namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_ControlTypes : BaseModel
    {
        [Key]
        public int? ControlType_Id { get; set; }
public string? GroupCode { get; set; }
public string? ControlType_Code { get; set; }
public string? ControlType_Name { get; set; }
public string? Description { get; set; }

        public Sys_ControlTypes()
        {
        }
    }
}

