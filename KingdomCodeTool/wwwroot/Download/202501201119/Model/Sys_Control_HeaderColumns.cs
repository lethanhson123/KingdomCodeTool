namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Control_HeaderColumns : BaseModel
    {
        [Key]
        public int? Control_HeaderColumn_Id { get; set; }
public int? Control_Id { get; set; }
public string? Language_Id { get; set; }
public int? Column_Index { get; set; }
public string? Column_Header { get; set; }
public string? Column_Align { get; set; }
public bool? Updating { get; set; }

        public Sys_Control_HeaderColumns()
        {
        }
    }
}

