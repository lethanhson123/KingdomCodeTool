namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSYeuCau_QMS : BaseModel
    {
        [Key]
        public int? CLSYeuCau_Id { get; set; }
public int? SoTT { get; set; }
public int? HangDoi_Idx { get; set; }
public int? HangDoi_Details { get; set; }
public string? KhuVuc { get; set; }
public bool? App { get; set; }

        public CLSYeuCau_QMS()
        {
        }
    }
}

