namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSYeuCau : BaseModel
    {
        [Key]
        public int? CLSYeuCau_Id { get; set; }
public string? SoPhieuYeuCau { get; set; }
public DateTime? NgayYeuCau { get; set; }
public DateTime? ThoiGianYeuCau { get; set; }
public int? NamYeuCau { get; set; }
public int? ThangYeuCau { get; set; }
public int? NoiYeuCau_Id { get; set; }
public int? BacSiChiDinh_Id { get; set; }
public int? NoiThucHien_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? LuuTru_Id { get; set; }
public int? NhomDichVu_Id { get; set; }
public bool? ThucHienBenNgoai { get; set; }
public bool? YeuCauBenNgoai { get; set; }
public int? DonViBenNgoai_Id { get; set; }
public string? TenBacSiBenNgoai { get; set; }
public bool? TiemCanQuang { get; set; }
public bool? SinhThiet { get; set; }
public bool? Clotest { get; set; }
public string? TrieuChung { get; set; }
public string? KetQuaXNKhac { get; set; }
public string? DaiThe { get; set; }
public string? ViThe { get; set; }
public string? ChanDoan { get; set; }
public string? GhiChu { get; set; }
public bool? Khan { get; set; }
public bool? ThanhToanTruoc { get; set; }
public int? SoDichVuYeuCau { get; set; }
public int? SoDichVuDongTien { get; set; }
public bool? DuocPhepThucHien { get; set; }
public bool? HuyYeuCau { get; set; }
public bool? KhoaDuLieu { get; set; }
public DateTime? NgayKhoaDuLieu { get; set; }
public DateTime? ThoiGianKhoaDuLieu { get; set; }
public int? NguoiKhoa_Id { get; set; }
public int? MaNguoiKhoa { get; set; }
public string? TenNguoiKhoa { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? DichVu_KhamBenh_Id { get; set; }
public int? KhamBenh_Id { get; set; }
public int? BacSiBenNgoai_Id { get; set; }
public string? NoiDungChiTiet { get; set; }
public int? NoiThucHienThayDoi_Id { get; set; }
public DateTime? NgayGioYeuCau { get; set; }
public int? GioYeuCau { get; set; }
public bool? DaNhanBenhPham { get; set; }
public string? BenhPham { get; set; }
public DateTime? NgayNhanBenhPham { get; set; }
public DateTime? ThoiGianNhanBenhPham { get; set; }
public int? NguoiNhanBenhPham_Id { get; set; }
public int? MaNguoiNhapBenhPham { get; set; }
public string? TenNguoiNhapBenhPham { get; set; }
public int? SoThuTu { get; set; }
public int? DoiTuong_Id { get; set; }
public bool? DaLayMau { get; set; }
public int? HopDong_BenhNhan_Id { get; set; }
public int? HinhThucThanhToan_Id { get; set; }
public int? HopDong_Id { get; set; }
public string? TrangThai_HangDoi { get; set; }
public int? ThuTuYeuCau { get; set; }
public int? GoiDichVu_Id { get; set; }
public int? BenhNhanGoiDichVu_Id { get; set; }
public int? The_Id { get; set; }
public int? LoaiKhachHang_Id { get; set; }
public DateTime? ThoiGianLichHen { get; set; }
public int? LichHen_ID { get; set; }
public bool? BNKhongDenBV { get; set; }
public string? BarCodeID { get; set; }
public bool? DicomImageAvailable { get; set; }
public string? DicomImageResultDate { get; set; }
public DateTime? DicomImageResultDateTime { get; set; }
public string? DicomImageStudyInstanceUID { get; set; }
public string? DicomImageOpenViewURL { get; set; }
public int? DangKyMau_Id { get; set; }
public bool? NhapKetQua { get; set; }
public DateTime? ThoiGianKetQua { get; set; }
public int? ThietBi_Id { get; set; }
public int? NguoiTraKQ_Id { get; set; }

        public CLSYeuCau()
        {
        }
    }
}

