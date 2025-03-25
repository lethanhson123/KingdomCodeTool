namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSYeuCauChiTiet : BaseModel
    {
        [Key]
        public int? YeuCauChiTiet_Id { get; set; }
public int? CLSYeuCau_Id { get; set; }
public int? DichVu_Id { get; set; }
public int? PhongBan_Id { get; set; }
public int? LoaiGia_Id { get; set; }
public string? DonGiaDoanhThu { get; set; }
public string? DonGiaHoTro { get; set; }
public string? DonGiaHoTroChiTra { get; set; }
public string? DonGiaThanhToan { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public string? MoTa { get; set; }
public string? TrangThai { get; set; }
public bool? ThucHienBenNgoai { get; set; }
public bool? DaThuTien { get; set; }
public decimal? SoLuong { get; set; }
public decimal? GiaTriMienGiam { get; set; }
public decimal? GiaTriThatThu { get; set; }
public decimal? GiaTriDaThanhToan { get; set; }
public bool? DaThanhToan_MotPhan { get; set; }
public bool? DaThanhToan_HoanTat { get; set; }
public bool? DuocPhepThucHien { get; set; }
public bool? Huy { get; set; }
public DateTime? NgayHuy { get; set; }
public DateTime? ThoiGianHuy { get; set; }
public int? NguoiHuy_Id { get; set; }
public bool? KhongThuTien { get; set; }
public string? LyDoKhongThuTien { get; set; }
public bool? DaXepLichMo { get; set; }
public bool? BHYTDongTien { get; set; }
public decimal? DonGiaChenhLech { get; set; }
public decimal? DonGiaHoTroChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_ChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_HoTroChenhLech { get; set; }
public bool? DaTaoBienBanHoiChan { get; set; }
public bool? ChuyenDucKhuon { get; set; }
public bool? DaDucKhuon { get; set; }
public DateTime? ThoiGianDucKhuon { get; set; }
public int? NguoiDucKhuon_ID { get; set; }
public bool? ChuyenMoPhong { get; set; }
public bool? DaMoPhong { get; set; }
public bool? ChuyenXaTri { get; set; }
public bool? DaXaTri { get; set; }
public DateTime? ThoiGianXaTri { get; set; }
public int? NguoiXaTri_ID { get; set; }
public bool? DaHoaTri { get; set; }
public bool? DaLayBenhPham { get; set; }
public bool? DichVuKemTheo { get; set; }
public decimal? TyLeGiam { get; set; }
public int? HenTaiKham_ID { get; set; }
public int? HoaDonTamUng_Id { get; set; }
public decimal? DonGia { get; set; }
public decimal? DonGiaPhaiThu { get; set; }
public int? GoidichVu_Id { get; set; }
public int? BenhNhanGoiDichVu_Id { get; set; }
public decimal? DonGiadichVuTRongGoi { get; set; }
public decimal? PhanTram { get; set; }
public bool? FollowUp { get; set; }
public bool? MienPhi_GoiKham { get; set; }
public decimal? DonGiaCoPhan { get; set; }
public decimal? GiaTriDaThanhToan_CoPhan { get; set; }
public decimal? GiaTriMienGiam_ChenhLech { get; set; }
public decimal? GiaTriMienGiam_HoTroChenhLech { get; set; }
public decimal? GiaTriMienGiam_CoPhan { get; set; }
public bool? ChuyenChiPhiNgoaiTru { get; set; }
public decimal? DonGiaHoTro_KTC { get; set; }
public decimal? DonGiaHoTroChiTra_KTC { get; set; }
public int? DonGiaDoanhThu_ThucHien { get; set; }
public int? DonGiaThanhToan_ThucHien { get; set; }
public int? DonGiaChenhLech_ThucHien { get; set; }
public string? SiteCode { get; set; }
public string? SiteCode_ThucHien { get; set; }
public int? Mapping_Public_Id { get; set; }
public int? IDChuyen { get; set; }
public int? CostCenter_Id { get; set; }
public int? The_Id { get; set; }
public int? LoaiKhachHang_Id { get; set; }
public bool? MienPhi_The { get; set; }
public int? DonGiaThe { get; set; }
public int? DonGiaTheChiTra { get; set; }
public bool? ChuyenBill { get; set; }
public bool? ThucHienDichVu { get; set; }
public string? DonGiaHoTroGoc { get; set; }
public int? ChuongTrinh_Id { get; set; }

        public CLSYeuCauChiTiet()
        {
        }
    }
}

