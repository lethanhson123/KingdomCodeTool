namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Menus : BaseModel
    {
        [Key]
        public int? Menu_Id { get; set; }
public string? Menu_Code { get; set; }
public string? Menu_Name { get; set; }
public string? Language_Id { get; set; }
public int? Menu_Level { get; set; }
public int? Idx { get; set; }
public int? Parent_Id { get; set; }
public int? Function_Id { get; set; }
public string? Function_Argument { get; set; }
public bool? Default_Right { get; set; }
public bool? Enabled { get; set; }
public bool? MenuBar { get; set; }
public bool? MenuLeft { get; set; }
public bool? Is_System { get; set; }
public bool? Is_Report { get; set; }
public int? Report_Id { get; set; }
public string? Shortcut_Key { get; set; }
public string? Shortcut_Character { get; set; }
public int? WindowState { get; set; }
public bool? ShowDialog { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public string? Function_Argument_Notes { get; set; }
public string? Remark { get; set; }

        public Sys_Menus()
        {
        }
    }
}

