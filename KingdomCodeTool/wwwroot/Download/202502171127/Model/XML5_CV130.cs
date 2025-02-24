namespace Data_eHospital_DongNai_A.Model
{
    public partial class XML5_CV130 : BaseModel
    {
        [Key]
        public int? XML5_CV130_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? XacNhanChiPhi_Id { get; set; }
public string? MA_LK { get; set; }
public int? STT { get; set; }
public string? DIEN_BIEN_LS { get; set; }
public string? GIAI_DOAN_BENH { get; set; }
public string? HOI_CHAN { get; set; }
public string? PHAU_THUAT { get; set; }
public string? THOI_DIEM_DBLS { get; set; }
public string? NGUOI_THUC_HIEN { get; set; }
public string? DU_PHONG { get; set; }

        public XML5_CV130()
        {
        }
    }
}

