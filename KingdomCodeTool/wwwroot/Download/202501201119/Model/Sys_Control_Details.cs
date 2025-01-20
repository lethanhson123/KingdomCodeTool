namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Control_Details : BaseModel
    {
        [Key]
        public int? Control_Detail_Id { get; set; }
public int? Control_Id { get; set; }
public string? Language_Id { get; set; }
public string? PropertyName { get; set; }
public string? PropertyValue { get; set; }
public string? Origin_PropertyValue { get; set; }
public int? User_Id { get; set; }
public int? Group_Id { get; set; }
public bool? Updating { get; set; }

        public Sys_Control_Details()
        {
        }
    }
}

