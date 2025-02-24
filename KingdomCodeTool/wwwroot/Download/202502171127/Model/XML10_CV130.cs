namespace Data_eHospital_DongNai_A.Model
{
    public partial class XML10_CV130 : BaseModel
    {
        [Key]
        public int? XML10_CV130_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? XacNhanChiPhi_Id { get; set; }
public string? MA_LK { get; set; }
public string? SO_SERI { get; set; }
public string? SO_CT { get; set; }
public int? SO_NGAY { get; set; }
public string? DON_VI { get; set; }
public string? CHAN_DOAN_RV { get; set; }
public string? TU_NGAY { get; set; }
public string? DEN_NGAY { get; set; }
public string? MA_TTDV { get; set; }
public string? TEN_BS { get; set; }
public string? MA_BS { get; set; }
public string? NGAY_CT { get; set; }

        public XML10_CV130()
        {
        }
    }
}

