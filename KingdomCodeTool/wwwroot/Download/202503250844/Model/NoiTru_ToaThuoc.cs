namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_ToaThuoc : BaseModel
    {
        [Key]
        public int? ToaThuoc_Id { get; set; }
public string? SoThuTuToa { get; set; }
public int? KhamBenh_Id { get; set; }
public int? Duoc_Id { get; set; }
public decimal? SoLuong { get; set; }
public int? SoNgay { get; set; }
public int? SoLanTrenNgay { get; set; }
public decimal? SoLuongTrenLan { get; set; }
public decimal? SoLuong_BuoiSang { get; set; }
public decimal? SoLuong_BuoiTrua { get; set; }
public decimal? SoLuong_BuoiChieu { get; set; }
public decimal? SoLuong_BuoiToi { get; set; }
public int? DuongDung_Id { get; set; }
public int? BangGia_Id { get; set; }
public int? LoaiGia_Id { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public string? DonGiaDoanhThu { get; set; }
public string? DonGiaHoTro { get; set; }
public string? DonGiaHoTroChiTra { get; set; }
public string? DonGiaThanhToan { get; set; }
public string? TyLeVAT { get; set; }
public string? GiaTriVAT { get; set; }
public string? GhiChu { get; set; }
public int? NguonDuoc_Id { get; set; }
public int? NguonHang_Id { get; set; }
public int? PhieuLinh_Id { get; set; }
public int? ChungTu_Id { get; set; }
public string? DonGiaDoanhThuTam { get; set; }
public string? DonGiaHoTroTam { get; set; }
public string? DonGiaThanhToanTam { get; set; }
public decimal? SoTienThucTe { get; set; }
public decimal? SoTienMienGiam { get; set; }
public decimal? SoTienThatThu { get; set; }
public decimal? SoTienThanhToan { get; set; }
public decimal? SoTienDaThanhToan { get; set; }
public bool? MienPhi { get; set; }
public string? TrangThai { get; set; }
public string? NguonLayThuoc { get; set; }
public bool? HuyToaThuoc { get; set; }
public bool? MuaNgoai { get; set; }
public bool? PhatThuocTaiQuay { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? KhoPhat_Id { get; set; }
public bool? TinhTien { get; set; }
public int? YeuCau { get; set; }
public int? PhoiHop { get; set; }
public bool? PhaChe { get; set; }
public decimal? DonGiaChenhLech { get; set; }
public decimal? DonGiaHoTroChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_ChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_HoTroChenhLech { get; set; }
public int? ChuongTrinh_Id { get; set; }

        public NoiTru_ToaThuoc()
        {
        }
    }
}

