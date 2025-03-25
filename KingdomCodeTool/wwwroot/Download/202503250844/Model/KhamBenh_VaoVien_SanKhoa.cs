namespace Data_eHospital_DongNai_A.Model
{
    public partial class KhamBenh_VaoVien_SanKhoa : BaseModel
    {
        [Key]
        public int? KhamBenh_VaoVien_SanKhoa_ID { get; set; }
public int? KhamBenhVaoVien_Id { get; set; }
public bool? BuouCo { get; set; }
public bool? TieuDuong { get; set; }
public bool? TimMach { get; set; }
public bool? Lao { get; set; }
public string? ChuKy { get; set; }
public int? SoNgayHinhKinh { get; set; }
public bool? ThongKinh { get; set; }
public int? SoLuongKinh { get; set; }
public int? KinhLanDau { get; set; }
public int? NamLayChong { get; set; }
public bool? Vong { get; set; }
public bool? Thuoc { get; set; }
public bool? BaoCaosu { get; set; }
public bool? Khac { get; set; }
public string? BenhPhuKhoa { get; set; }
public DateTime? VMCNgay { get; set; }
public string? LyDo { get; set; }
public string? BenhVien { get; set; }
public string? PhauThuatKhac { get; set; }
public int? LanCoThai { get; set; }
public int? LanSanh { get; set; }
public int? LanSay { get; set; }
public int? DHKN { get; set; }
public int? SoConSong { get; set; }
public decimal? ConNangNhat { get; set; }
public int? NamSinhconNhoNhat { get; set; }
public string? TaiBien { get; set; }
public DateTime? NgayKyKinhChot { get; set; }
public DateTime? NgayDuSanh { get; set; }
public string? KhamThaiTai { get; set; }
public long? NgayGioCDKhongro { get; set; }
public DateTime? NgayGioCD { get; set; }
public string? ThanhBung { get; set; }
public string? VMC { get; set; }
public int? TCCao { get; set; }
public string? TCHinhDang { get; set; }
public string? TimThai { get; set; }
public string? AmDao { get; set; }
public string? TangSanhMon { get; set; }
public string? CoTC { get; set; }
public int? Oi { get; set; }
public string? MauNuocOi { get; set; }
public string? MoTaNuocOi { get; set; }
public DateTime? NgayGioOi { get; set; }
public string? NgoiThai { get; set; }
public string? KieuThe { get; set; }
public string? DoLot { get; set; }
public string? KhungChau { get; set; }
public string? ChuanDoanSoBo { get; set; }

        public KhamBenh_VaoVien_SanKhoa()
        {
        }
    }
}

