namespace Data_eHospital_DongNai_A.Model
{
    public partial class XML4_CV130 : BaseModel
    {
        [Key]
        public int? XML4_CV130_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? XacNhanChiPhi_Id { get; set; }
public string? MA_LK { get; set; }
public int? STT { get; set; }
public string? MA_DICH_VU { get; set; }
public string? MA_CHI_SO { get; set; }
public string? TEN_CHI_SO { get; set; }
public string? GIA_TRI { get; set; }
public string? DON_VI_DO { get; set; }
public string? MO_TA { get; set; }
public string? KET_LUAN { get; set; }
public string? NGAY_KQ { get; set; }
public string? MA_BS_DOC_KQ { get; set; }
public string? DU_PHONG { get; set; }

        public XML4_CV130()
        {
        }
    }
}

