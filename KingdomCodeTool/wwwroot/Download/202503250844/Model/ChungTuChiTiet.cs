namespace Data_eHospital_DongNai_A.Model
{
    public partial class ChungTuChiTiet : BaseModel
    {
        [Key]
        public int? ChungTuChiTiet_Id { get; set; }
public int? ChungTu_Id { get; set; }
public int? Duoc_Id { get; set; }
public int? SoLoNhap_Id { get; set; }
public string? SoKiemSoat { get; set; }
public string? SoVisa { get; set; }
public int? DonViTinh_Id { get; set; }
public string? SoLuongYeuCau { get; set; }
public string? SoLuongThucTe { get; set; }
public string? SoLuongDaXuat { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public string? DonGiaMua { get; set; }
public string? DonGiaBan { get; set; }
public string? DonGiaVon { get; set; }
public string? DonGiaThanhToan { get; set; }
public string? SoQuyen { get; set; }
public string? SoHoaDonVAT { get; set; }
public string? TyLeVAT { get; set; }
public string? GiaTriVAT { get; set; }
public bool? MienPhi { get; set; }
public int? LyDoMienPhi_Id { get; set; }
public string? SoChungTuKeToan { get; set; }
public string? SoChungTuTienMat { get; set; }
public string? TrangThai { get; set; }
public bool? DaPhatSinhPhieuXuat { get; set; }
public bool? DaPhatSinhPhieuHoanTra { get; set; }
public bool? KhuyenMai { get; set; }
public int? DonDatHang_Id { get; set; }
public string? GhiChuChiTiet { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? NguonHang_Id { get; set; }
public string? DonGiaVonVAT { get; set; }
public string? ThanhTienMua { get; set; }
public string? ThanhTienVon { get; set; }
public bool? IsTachLo { get; set; }
public int? DonViTinhBanDau_Id { get; set; }
public string? SoLuongBanDau { get; set; }
public int? GoiThau_Id { get; set; }
public decimal? DonGiaThau { get; set; }
public string? MaThongTu { get; set; }
public string? MaQuyetDinh { get; set; }
public string? SoNamHopDong { get; set; }

        public ChungTuChiTiet()
        {
        }
    }
}

