namespace Data_eHospital_DongNai_A.Model
{
    public partial class HoaDonChiTiet : BaseModel
    {
        [Key]
        public int? HoaDonChiTiet_Id { get; set; }
public int? HoaDon_Id { get; set; }
public int? DichVu_Id { get; set; }
public int? PhongBan_Id { get; set; }
public int? LoaiGia_Id { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public int? DichVu_ThayDoi_Id { get; set; }
public int? PhongBan_ThayDoi_Id { get; set; }
public string? TyLeVAT { get; set; }
public string? GiaTriVAT { get; set; }
public string? MaSoThue { get; set; }
public string? SoChungTuKeToan { get; set; }
public int? YeuCauChiTiet_Id { get; set; }
public string? NoiDungThu { get; set; }
public decimal? SoLuong { get; set; }
public decimal? DonGiaDoanhThu { get; set; }
public decimal? DonGiaHoTro { get; set; }
public decimal? DonGiaHoTroChiTra { get; set; }
public decimal? DonGiaThanhToan { get; set; }
public decimal? GiaTriThucThu { get; set; }
public bool? DaHoanTra { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? ToaThuoc_Id { get; set; }
public int? BenhAnPhauThuat_VTYT_ID { get; set; }
public int? ChungTuChiTiet_Id { get; set; }
public int? IDRef { get; set; }
public string? Loai_IDRef { get; set; }
public int? NoiDung_Id { get; set; }
public string? LoaiNoiDung { get; set; }
public int? ChungTuXuatBN_Id { get; set; }
public decimal? DonGiaChenhLech { get; set; }
public decimal? DonGiaHoTroChenhLech { get; set; }
public decimal? GiaTriThucThu_ChenhLech { get; set; }
public decimal? GiaTriThucThu_HoTroChenhLech { get; set; }
public int? CLSGhiNhanHoaChat_Id { get; set; }
public decimal? TyLeThatThu { get; set; }
public decimal? GiaTriThatThu { get; set; }
public int? BenhAnNgoaiTru_ToaThuoc_Id { get; set; }
public decimal? DonGiaCoPhan { get; set; }
public decimal? GiaTriThucThu_CoPhan { get; set; }
public decimal? GiaTriMienGiam_ChenhLech { get; set; }
public decimal? GiaTriMienGiam_HoTroChenhLech { get; set; }
public decimal? GiaTriMienGiam_CoPhan { get; set; }

        public HoaDonChiTiet()
        {
        }
    }
}

