namespace Data_eHospital_DongNai_A.Model
{
    public partial class TiepNhan : BaseModel
    {
        [Key]
        public int? TiepNhan_Id { get; set; }
public string? SoTiepNhan { get; set; }
public string? SoThuTu { get; set; }
public bool? UuTien { get; set; }
public int? BenhNhan_Id { get; set; }
public int? NoiTiepNhan_Id { get; set; }
public DateTime? NgayTiepNhan { get; set; }
public DateTime? ThoiGianTiepNhan { get; set; }
public int? NamTiepNhan { get; set; }
public int? ThangTiepNhan { get; set; }
public int? DoiTuong_Id { get; set; }
public string? NoiLamViec { get; set; }
public int? NguoiLienHe_Id { get; set; }
public string? NguoiLienHe { get; set; }
public string? DiaChiLienHe { get; set; }
public int? HinhThucDenKham_Id { get; set; }
public int? NoiGioiThieu_Id { get; set; }
public int? LyDoTiepNhan_Id { get; set; }
public string? SoBHYT { get; set; }
public DateTime? BHYTTuNgay { get; set; }
public DateTime? BHYTDenNgay { get; set; }
public bool? ThuTienTruoc { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? ChanDoanNGT { get; set; }
public bool? TaiKham { get; set; }
public int? DonViCongTac_Id { get; set; }
public int? PhieuDieuTri_Id { get; set; }
public int? TuyenKhamBenh_Id { get; set; }
public int? TinhThanh_Id { get; set; }
public int? QuanHuyen_Id { get; set; }
public int? XaPhuong_Id { get; set; }
public int? LoaiBHYT { get; set; }
public int? DoiTuong_ChiTiet_Id { get; set; }
public int? BenhVien_KCB_Id { get; set; }
public DateTime? NgayBHYT1 { get; set; }
public DateTime? NgayBHYT2 { get; set; }
public DateTime? NgayBHYT3 { get; set; }
public int? XacNhanChiPhi_Id { get; set; }
public string? SoChuyenVien { get; set; }
public int? HinhThucChuyenVien_Id { get; set; }
public int? LyDoChuyenVien_Id { get; set; }
public int? HopDong_BenhNhan_Id { get; set; }
public int? HinhThucThanhToan_Id { get; set; }
public string? TienSuBenh { get; set; }
public DateTime? ThoiGianChuyenTuyen { get; set; }
public bool? TrungSoBHYT { get; set; }
public bool? Tren6Thang { get; set; }
public bool? ThuocUngThu { get; set; }
public int? CongTyBHTN_ID { get; set; }
public string? SoTheBHTN { get; set; }
public DateTime? BHTN_TuNgay { get; set; }
public DateTime? BHTN_DenNgay { get; set; }
public string? BHTN_DiaChi { get; set; }
public string? BHTN_DienThoai { get; set; }
public string? BHTN_Fax { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }
public bool? IsDiffSite { get; set; }
public int? The_ID { get; set; }
public int? LoaiKhachHang_ID { get; set; }
public bool? KhongCungChiTra { get; set; }
public int? NoiSinhSong_ID { get; set; }
public string? TongTienHoTro { get; set; }
public DateTime? HieuLucTuNgay { get; set; }
public DateTime? HieuLucDenNgay { get; set; }
public DateTime? NgayHuong5Nam { get; set; }
public int? DaXuatHSKSK { get; set; }
public bool? Export { get; set; }
public int? NguoiGioiThieu_Id { get; set; }
public string? GhiChu { get; set; }

        public TiepNhan()
        {
        }
    }
}

