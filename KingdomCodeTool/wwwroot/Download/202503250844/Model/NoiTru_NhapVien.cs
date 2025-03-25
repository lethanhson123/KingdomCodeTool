namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_NhapVien : BaseModel
    {
        [Key]
        public int? NhapVien_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public DateTime? NgayNhapVien { get; set; }
public DateTime? ThoiGianNhapVien { get; set; }
public int? NoiNhapVien_Id { get; set; }
public int? BacSiChiDinh_Id { get; set; }
public int? LyDoNhapVien_Id { get; set; }
public int? KhoaDieuTri_Id { get; set; }
public int? BenhAn_Id { get; set; }
public string? ChanDoan { get; set; }
public int? ICD_ChanDoan { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? KhamBenh_Id { get; set; }
public bool? CapCuu { get; set; }
public int? LoaiBenhAn_Id { get; set; }

        public NoiTru_NhapVien()
        {
        }
    }
}

