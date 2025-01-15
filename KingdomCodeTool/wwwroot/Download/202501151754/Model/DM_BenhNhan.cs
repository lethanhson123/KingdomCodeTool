namespace Data.Model
{
    public partial class DM_BenhNhan : BaseModel
    {
        public int? BenhNhan_Id { get; set; }
public string? MaYTe { get; set; }
public string? MaBenhVien { get; set; }
public string? SoVaoVien { get; set; }
public string? TenBenhNhan { get; set; }
public string? Ho { get; set; }
public string? Ten { get; set; }
public string? GioiTinh { get; set; }
public DateTime? NgaySinh { get; set; }
public int? NamSinh { get; set; }
public string? SoNha { get; set; }
public string? DiaChi { get; set; }
public int? NhomMau_Id { get; set; }
public int? YeuToRh_Id { get; set; }
public string? TienSuDiUng { get; set; }
public string? SoLuuTruNgoaiTru { get; set; }
public string? SoLuuTruNoiTru { get; set; }
public int? QuocTich_Id { get; set; }
public int? TinhThanh_Id { get; set; }
public int? QuanHuyen_Id { get; set; }
public int? XaPhuong_Id { get; set; }
public int? DanToc_Id { get; set; }
public int? NgheNghiep_Id { get; set; }
public bool? VietKieu { get; set; }
public bool? NguoiNuocNgoai { get; set; }
public string? CMND { get; set; }
public string? HoChieu { get; set; }
public string? TenKhongDau { get; set; }
public string? GhiChu { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public DateTime? NgayCapThe { get; set; }
public int? NamCapThe { get; set; }
public DateTime? ThoiGianCapThe { get; set; }
public int? NhanVien_Id { get; set; }
public string? TienSuBenh { get; set; }
public string? TienSuHutThuocLa { get; set; }
public int? DonViCongTac_Id { get; set; }
public string? SoDienThoai { get; set; }
public string? DiaChiThuongTru { get; set; }
public string? DiaChiLienLac { get; set; }
public string? Email { get; set; }
public string? DiaChiCoQuan { get; set; }
public bool? TuVong { get; set; }
public DateTime? NgayTuVong { get; set; }
public DateTime? ThoiGianTuVong { get; set; }
public int? NguyenNhanTuVong_Id { get; set; }
public int? NguoiGhiNhanTuVong_Id { get; set; }
public DateTime? ThoiGianGhiNhanTuVong { get; set; }
public int? CountNotes { get; set; }
public DateTime? ngaytaobenhnhan { get; set; }
public int? TinhTrangHonNhan_Id { get; set; }
public int? MoiQuanHe_Id { get; set; }
public string? DienThoaiBan { get; set; }
public string? NguoiLienHe { get; set; }
public string? DienThoai_NLH { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }
public string? MaDinhDanh_PID { get; set; }
public int? Status_PID { get; set; }
public DateTime? CMND_NgayCap { get; set; }
public string? CMND_NoiCap { get; set; }
public string? SoBHXH { get; set; }
public DateTime? SoBHXH_NgayCap { get; set; }
public string? TenCha { get; set; }
public string? TenMe { get; set; }
public string? TenVoChong { get; set; }

        public DM_BenhNhan()
        {
        }
    }
}

