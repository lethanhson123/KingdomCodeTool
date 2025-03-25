namespace Data_eHospital_DongNai_A.Model
{
    public partial class ChungTu : BaseModel
    {
        [Key]
        public int? ChungTu_Id { get; set; }
public string? MaChungTu { get; set; }
public string? SoChungTu { get; set; }
public DateTime? NgayChungTu { get; set; }
public string? LoaiChungTu { get; set; }
public int? MucDichChungTu_Id { get; set; }
public int? KhoXuat_Id { get; set; }
public int? NguoiGiao_Id { get; set; }
public string? NguoiGiao { get; set; }
public int? KhoNhap_Id { get; set; }
public int? NguoiNhan_Id { get; set; }
public string? NguoiNhan { get; set; }
public int? NguoiKiemTra_Id { get; set; }
public string? NguoiKiemTra { get; set; }
public int? NguoiDuyet_Id { get; set; }
public string? NguoiDuyet { get; set; }
public int? KeToanTruong_Id { get; set; }
public string? KeToanTruong { get; set; }
public int? ThuKho_Id { get; set; }
public string? ThuKho { get; set; }
public string? SoSeri { get; set; }
public string? SoHoaDon { get; set; }
public string? DienGiai { get; set; }
public string? GiaTri { get; set; }
public string? GiaTriThanhToan { get; set; }
public string? TyLeVat { get; set; }
public string? GiaTriVat { get; set; }
public string? ThueSuat { get; set; }
public string? GiaTriThue { get; set; }
public string? TyleChietKhau { get; set; }
public string? GiaTriChietKhau { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public string? SoChungTuGoc { get; set; }
public DateTime? NgayChungTuGoc { get; set; }
public int? NhaCungCap_Id { get; set; }
public int? HinhThucThanhToan_Id { get; set; }
public int? NguonDuoc_Id { get; set; }
public int? ChungTuLienQuan_Id { get; set; }
public int? KhamBenh_Id { get; set; }
public int? ToaThuocNoiTru_Id { get; set; }
public int? BenhAn_Id { get; set; }
public bool? DaNhanThuoc { get; set; }
public int? NguoiNhap_Id { get; set; }
public DateTime? NgayNhap { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? PhieuLinh_Id { get; set; }
public string? DienGiaiNghiepVuPhatSinh { get; set; }
public int? DonViGiao_Id { get; set; }
public string? TyLeVATNhapKhau { get; set; }
public string? GiaTriVATNhapKhau { get; set; }
public string? SoSeriNuocNgoai { get; set; }
public string? SoHoaDonNuocNgoai { get; set; }
public DateTime? NgayHoaDonNuocNgoai { get; set; }
public int? KhoSuDung_Id { get; set; }
public string? LoaiVatTu_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public string? TenBenhNhan { get; set; }
public string? GioiTinh { get; set; }
public int? NamSinh { get; set; }
public string? DiaChi { get; set; }
public string? SoDienThoai { get; set; }
public int? BacSiGioiThieu_Id { get; set; }
public int? DoiTuong_Id { get; set; }
public int? IDChuyen { get; set; }
public string? ChungTuKeToan { get; set; }
public int? Status { get; set; }
public int? Transfer_VienPhi_Id { get; set; }
public int? PhongBan_Id { get; set; }
public int? BacSi_Id { get; set; }
public string? TKNo { get; set; }
public string? TKCo { get; set; }
public string? MaChungTuRef { get; set; }
public string? LoaiChungTuRef { get; set; }
public int? PhieuLinhCanTru_Id { get; set; }
public int? KhoThucHien_Id { get; set; }
public int? KhoDoiUng_Id { get; set; }
public int? Menu_LoaiDuoc_ID { get; set; }
public int? NguoiSuDungMay_Id { get; set; }
public int? GoiThau_Id { get; set; }
public bool? XuatThuocBANgoaiTru { get; set; }
public DateTime? NgayGioChungTu { get; set; }
public string? NoiDaKham { get; set; }
public int? ChuyenChungTuID { get; set; }
public int? ChuyenDoanhThuID { get; set; }
public bool? THANHTOAN_TIMEOUT { get; set; }
public bool? DATHANHTOAN { get; set; }
public int? NGUOITHANHTOAN_ID { get; set; }
public string? NGAYTHANHTOAN { get; set; }
public DateTime? THOIGIANTHANHTOAN { get; set; }

        public ChungTu()
        {
        }
    }
}

