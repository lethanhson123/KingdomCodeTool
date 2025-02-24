namespace Data_eHospital_DongNai_A.Model
{
    public partial class ToaThuoc : BaseModel
    {
        [Key]
        public int? ToaThuoc_Id { get; set; }
public int? KhamBenh_ToaThuoc_Id { get; set; }
public string? SoThuTuToa { get; set; }
public int? KhamBenh_Id { get; set; }
public int? Duoc_Id { get; set; }
public string? SoLuong { get; set; }
public int? SoNgay { get; set; }
public int? SoLanTrenNgay { get; set; }
public decimal? SoLuongTrenLan { get; set; }
public decimal? SoLuong_BuoiSang { get; set; }
public decimal? SoLuong_BuoiTrua { get; set; }
public decimal? SoLuong_BuoiChieu { get; set; }
public decimal? SoLuong_BuoiToi { get; set; }
public int? DuongDung_Id { get; set; }
public string? DonGiaDoanhThu { get; set; }
public string? DonGiaHoTro { get; set; }
public string? DonGiaHoTroChiTra { get; set; }
public string? DonGiaThanhToan { get; set; }
public string? TienTe_Id { get; set; }
public string? TyGia { get; set; }
public bool? HuyToaThuoc { get; set; }
public string? GhiChu { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? idx { get; set; }
public int? LoaiGia_Id { get; set; }
public int? NguonHang_id { get; set; }
public string? GiaTriMienGiam { get; set; }
public string? GiaTriThatThu { get; set; }
public string? GiaTriDaThanhToan { get; set; }
public bool? DaThanhToan_MotPhan { get; set; }
public bool? DaThanhToan_HoanTat { get; set; }
public bool? PhatSinhHoaDon { get; set; }
public decimal? DonGiaChenhLech { get; set; }
public decimal? DonGiaHoTroChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_ChenhLech { get; set; }
public decimal? GiaTriDaThanhToan_HoTroChenhLech { get; set; }

        public ToaThuoc()
        {
        }
    }
}

