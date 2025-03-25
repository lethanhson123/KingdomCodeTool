namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSKetQua_XQ : BaseModel
    {
        [Key]
        public int? CLSKetQua_XQ_Id { get; set; }
public string? SoPhieu { get; set; }
public int? CLSYeuCau_Id { get; set; }
public string? ID_CT { get; set; }

        public CLSKetQua_XQ()
        {
        }
    }
}

