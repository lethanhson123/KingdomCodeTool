namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Value_Languages : BaseModel
    {
        [Key]
        public int? Value_Id { get; set; }
public string? Language_Id { get; set; }
public int? Key_Id { get; set; }
public string? Key_Type { get; set; }
public string? Key_Column { get; set; }
public string? Key_Code { get; set; }
public string? Key_Value { get; set; }

        public Sys_Value_Languages()
        {
        }
    }
}

