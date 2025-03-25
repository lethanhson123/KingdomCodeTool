namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_LuuTru : BaseModel
    {
        [Key]
        public int? LuuTru_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? PhongBan_Id { get; set; }
public DateTime? NgayVao { get; set; }
public DateTime? ThoiGianVao { get; set; }
public int? LyDoVao_Id { get; set; }
public string? LyDoVao_Code { get; set; }
public int? ICD_VaoKhoa { get; set; }
public DateTime? NgayRa { get; set; }
public DateTime? ThoiGianRa { get; set; }
public int? LyDoRa_Id { get; set; }
public string? LyDoRa_Code { get; set; }
public int? ICD_RaKhoa { get; set; }
public string? ChanDoanRaKhoa { get; set; }
public int? PhongBanChuyenDen_Id { get; set; }
public int? PhongBanChuyenDi_Id { get; set; }
public int? BacSiDieuTriChinh_Id { get; set; }
public int? BacSiDieuTri_Id { get; set; }
public int? NguoiNhap_Id { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? LuuTru_Prev { get; set; }
public bool? LuuTru_Current { get; set; }
public int? DoiTuong_Id { get; set; }
public int? LyDoChuyenKhoa_Id { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }

        public NoiTru_LuuTru()
        {
        }
    }
}

