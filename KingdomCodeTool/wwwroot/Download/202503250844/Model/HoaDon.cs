namespace Data_eHospital_DongNai_A.Model
{
    public partial class HoaDon : BaseModel
    {
        [Key]
        public int? HoaDon_Id { get; set; }
public string? SoHoaDon { get; set; }
public string? LoaiHoaDon { get; set; }
public int? TiepNhan_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public DateTime? NgayPhatSinh { get; set; }
public DateTime? ThoiGianPhatSinh { get; set; }
public int? NoiPhatSinh_Id { get; set; }
public int? NguoiLap_Id { get; set; }
public DateTime? NgayTra { get; set; }
public DateTime? ThoiGianTra { get; set; }
public int? NguoiTra_Id { get; set; }
public int? NoiTra_Id { get; set; }
public DateTime? NgayHoaDon { get; set; }
public DateTime? ThoiGianHoaDon { get; set; }
public int? NoiThuTien_Id { get; set; }
public int? NguoiThuTien_Id { get; set; }
public string? GiaTriHoaDon { get; set; }
public string? GiaTriVAT { get; set; }
public string? GiaTriThucThu { get; set; }
public int? HinhThucThanhToan_Id { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public string? GiaTriVND { get; set; }
public bool? DaThanhToan { get; set; }
public bool? NgoaiGio { get; set; }
public bool? HuyHoaDon { get; set; }
public bool? HoanTra { get; set; }
public int? HoaDonLienQuan_Id { get; set; }
public string? GhiChu { get; set; }
public string? TrangThai { get; set; }
public int? DangKyHoaDon_Id { get; set; }
public string? SoSerieVAT { get; set; }
public int? SoHoaDonVAT { get; set; }
public string? KH_MaSoThue { get; set; }
public string? KH_TenCongTy { get; set; }
public string? KH_DiaChi { get; set; }
public string? KH_NguoiDaiDien { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? IDChuyen { get; set; }
public int? Status { get; set; }
public int? Transfer_VienPhi_Id { get; set; }
public int? DoiTuong_Id { get; set; }
public int? InLai { get; set; }
public int? InLai_User_Id { get; set; }
public int? IDChuyenHuy { get; set; }
public int? IDChuyenHoan { get; set; }
public string? ThuHD_BL { get; set; }
public DateTime? NgayKhoaGoi { get; set; }
public string? TenCongTy { get; set; }
public string? MaSoThue { get; set; }
public string? DiaChiCongTy { get; set; }
public int? NhomThanhToan_ID { get; set; }
public string? HoaDonDoiUng { get; set; }
public int? ChuyenChungTuID { get; set; }
public int? ChuyenChungTuHoanID { get; set; }
public int? ChuyenChungTuHuyID { get; set; }
public int? ChuyenDoanhThuID { get; set; }
public int? ChuyenDoanhThuHoanID { get; set; }
public int? ChuyenDoanhThuHuyID { get; set; }

        public HoaDon()
        {
        }
    }
}

