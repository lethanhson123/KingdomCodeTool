namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_DataTypes : BaseModel
    {
        [Key]
        public int? DataType_Id { get; set; }
public string? DataType_Code { get; set; }
public string? DataType_Group { get; set; }
public string? Description { get; set; }
public bool? Enabled { get; set; }
public string? Remark { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Sys_DataTypes()
        {
        }
    }
}

