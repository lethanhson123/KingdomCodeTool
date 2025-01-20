namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class sys_Control_DefaufValue : BaseModel
    {
        [Key]
        public int? Control_DefaufValue_Id { get; set; }
public string? Funtions_Class { get; set; }
public string? Control_Name { get; set; }
public string? DefaufValue { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_id { get; set; }

        public sys_Control_DefaufValue()
        {
        }
    }
}

