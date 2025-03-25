namespace Data_eHospital_DongNai_A.Model
{
    public partial class BenhAn : BaseModel
    {
        [Key]
        public int? BenhAn_Id { get; set; }
public string? SoBenhAn { get; set; }
public string? SoLuuTru { get; set; }
public int? LoaiBenhAn_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public DateTime? NgayLap { get; set; }
public DateTime? ThoiGianLap { get; set; }
public int? NoiLap_Id { get; set; }
public int? NguoiLap_Id { get; set; }
public int? BacSiDieuTriChinh_Id { get; set; }
public int? BacSiDieuTri_Id { get; set; }
public int? KhoaChuyenDen_Id { get; set; }
public int? KhoaVao_Id { get; set; }
public DateTime? NgayVaoKhoa { get; set; }
public DateTime? ThoiGianVaoKhoa { get; set; }
public int? KhoaRa_Id { get; set; }
public DateTime? NgayVaoVien { get; set; }
public DateTime? ThoiGianVaoVien { get; set; }
public DateTime? NgayRaVien { get; set; }
public DateTime? ThoiGianRaVien { get; set; }
public decimal? SoNgayDieuTri { get; set; }
public int? LyDoNhapVien_Id { get; set; }
public int? LyDoXuatVien_Id { get; set; }
public int? ChuyenDenBenhVien_Id { get; set; }
public string? ChanDoanTuyenDuoi { get; set; }
public int? ICD_TuyenDuoi { get; set; }
public string? ChanDoanKhamBenh { get; set; }
public int? ICD_KhamBenh { get; set; }
public string? ChanDoanVaoKhoa { get; set; }
public int? ICD_VaoKhoa { get; set; }
public string? ChanDoanRaVien { get; set; }
public int? ICD_BenhChinh { get; set; }
public int? ICD_BenhPhu { get; set; }
public int? KetQuaDieuTri_Id { get; set; }
public string? MoTaTinhTrangRaVien { get; set; }
public string? TienSuBanThan { get; set; }
public string? TienSuGiaDinh { get; set; }
public string? QuaTrinhBenhLy { get; set; }
public int? Mach { get; set; }
public int? HuyetApThap { get; set; }
public int? HuyetApCao { get; set; }
public int? NhipTho { get; set; }
public decimal? NhietDo { get; set; }
public decimal? ChieuCao { get; set; }
public decimal? CanNang { get; set; }
public string? KhamToanThan { get; set; }
public string? TienLuong { get; set; }
public string? KeHoachDieuTri { get; set; }
public string? CanLamSang { get; set; }
public string? LamSang { get; set; }
public bool? TaiBienDieuTri { get; set; }
public int? NguyenNhanTaiBien_Id { get; set; }
public bool? GiaiPhauBenh { get; set; }
public int? TinhTrangGiaiPhauBenh_Id { get; set; }
public string? TrangThai { get; set; }
public bool? KhoaBenhAn { get; set; }
public DateTime? NgayKhoaBenhAn { get; set; }
public DateTime? ThoiGianKhoaBenhAn { get; set; }
public int? NguoiKhoaBenhAn_Id { get; set; }
public bool? DaThanhToan { get; set; }
public DateTime? NgayThanhToan { get; set; }
public DateTime? ThoiGianThanhToan { get; set; }
public int? NguoiThanhToan_Id { get; set; }
public bool? DaXacNhanDoanhThu { get; set; }
public DateTime? NgayXacNhanDoanhThu { get; set; }
public DateTime? ThoiGianXacNhanDoanhThu { get; set; }
public int? NguoiXacNhanDoanhThu_Id { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public bool? TuVong { get; set; }
public DateTime? NgayTuVong { get; set; }
public DateTime? ThoiGianTuVong { get; set; }
public DateTime? ThoiGianKhamNghiem { get; set; }
public DateTime? ThoiGianNhanTuThi { get; set; }
public string? KetQuaKhamNghiem { get; set; }
public string? GhiChu { get; set; }
public int? ICD_TuVong_Id { get; set; }
public int? BacSiGhiNhanTuVong_Id { get; set; }
public int? BacSiKhamNghiem_Id { get; set; }
public string? SoDienThoai { get; set; }
public int? LanVaoVien { get; set; }
public int? ChuyenVien_Id { get; set; }
public bool? ThuThuat { get; set; }
public bool? PhauThuat { get; set; }
public bool? BienChung { get; set; }
public int? NguyenNhanTuVong_Id { get; set; }
public int? ICD_GiaiPhauTuThi_Id { get; set; }
public string? SoCapCuu { get; set; }
public int? DoiTuong_Id { get; set; }
public int? XacNhanChiPhi_Id { get; set; }
public int? ICD_NguyenNhanXuatVien { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }
public decimal? OtherSite_TongChiPhi { get; set; }
public bool? OtherSite_CoPhatSinhCLS { get; set; }
public bool? OtherSite_CoPhatSinhThuoc { get; set; }
public decimal? OtherSite_TongTienHoTro { get; set; }
public bool? IsBenhAn2Khu { get; set; }
public string? SiteCode_RaVien { get; set; }
public int? OtherSite_XacNhanChiPhi_ID { get; set; }
public bool? IsDaChuyenKhu { get; set; }
public int? TruongKhoa_Id { get; set; }
public int? ThuTruong_Id { get; set; }
public bool? Export { get; set; }

        public BenhAn()
        {
        }
    }
}

