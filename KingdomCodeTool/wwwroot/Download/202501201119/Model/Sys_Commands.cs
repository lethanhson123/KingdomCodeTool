namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Commands : BaseModel
    {
        [Key]
        public int? Command_Id { get; set; }
public string? Command_Name { get; set; }
public string? Command_Text { get; set; }
public int? Function_Id { get; set; }
public bool? IsCommandButton { get; set; }
public bool? IsCommandMenu { get; set; }
public bool? IsCommandBar { get; set; }
public bool? DefaultRight { get; set; }
public bool? Enabled { get; set; }
public bool? SetPermission { get; set; }

        public Sys_Commands()
        {
        }
    }
}

