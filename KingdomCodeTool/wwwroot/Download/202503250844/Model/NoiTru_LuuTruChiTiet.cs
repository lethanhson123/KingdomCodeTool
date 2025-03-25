namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_LuuTruChiTiet : BaseModel
    {
        [Key]
        public int? LuuTruChiTiet_Id { get; set; }
public int? LuuTru_Id { get; set; }
public int? PhongBan_Id { get; set; }
public int? GiuongBenh_Id { get; set; }
public int? PhongBenh_Id { get; set; }
public DateTime? NgayVao { get; set; }
public DateTime? ThoiGianVao { get; set; }
public DateTime? ThoiGianTinhLuuTru { get; set; }
public int? LyDo_Id { get; set; }
public DateTime? NgayRa { get; set; }
public DateTime? ThoiGianRa { get; set; }
public string? DonGiaPhaiThu { get; set; }
public string? DonGia { get; set; }
public string? TyLeVAT { get; set; }
public string? GiaTriVAT { get; set; }
public string? TienTe_Id { get; set; }
public string? Tygia { get; set; }
public int? LoaiGia_Id { get; set; }
public int? GiuongBenhChuyenDen_Id { get; set; }
public bool? BaoPhong { get; set; }
public bool? KhongTinhTien { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? LuuTruChiTiet_Prev { get; set; }
public bool? LuuTruChiTiet_Current { get; set; }
public int? DoiTuong_Id { get; set; }
public bool? LuuTruChiTiet_Id_Last { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }

        public NoiTru_LuuTruChiTiet()
        {
        }
    }
}

