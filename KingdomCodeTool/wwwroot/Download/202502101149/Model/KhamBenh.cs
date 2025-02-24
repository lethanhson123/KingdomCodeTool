namespace Data_eHospital_DongNai_A.Model
{
    public partial class KhamBenh : BaseModel
    {
        [Key]
        public int? KhamBenh_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? TiepNhan_Id { get; set; }
public int? DichVu_Id { get; set; }
public int? PhongBan_Id { get; set; }
public DateTime? NgayKham { get; set; }
public DateTime? ThoiGianKham { get; set; }
public int? BacSiKham_Id { get; set; }
public string? ChanDoanKhoaKham { get; set; }
public int? ChanDoanICD_Id { get; set; }
public int? ChanDoanPhuICD_Id { get; set; }
public int? HuongGiaiQuyet_Id { get; set; }
public string? GhiChu { get; set; }
public int? SoNgayHenTaiKham { get; set; }
public int? NhapKhoa_Id { get; set; }
public int? ChuyenDenBenhVien_Id { get; set; }
public int? CheDoAnUong_Id { get; set; }
public int? CheDoChamSoc_Id { get; set; }
public bool? KhamCapCuu { get; set; }
public int? KhamBenhLanDau_Id { get; set; }
public int? LyDoNhapVien_Id { get; set; }
public int? Mach { get; set; }
public int? HuyetApThap { get; set; }
public int? HuyetApCao { get; set; }
public int? NhipTho { get; set; }
public decimal? NhietDo { get; set; }
public decimal? ChieuCao { get; set; }
public decimal? CanNang { get; set; }
public string? TrieuChungLamSang { get; set; }
public int? DichVu_KhamBenh_Id { get; set; }
public string? ChanDoanSoBo { get; set; }
public int? YeuCauChiTiet_Id { get; set; }
public int? KhamBenh_ChuyenKhoa_Id { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? ToaThuocMuaNgoai { get; set; }
public string? ChanDoanICD { get; set; }
public string? GiaiDoanBenh { get; set; }
public string? TacDungPhu { get; set; }
public string? TuanThuCuaBN { get; set; }
public int? HuongDieuTri_Id { get; set; }
public string? SoNgayDieuTri { get; set; }
public string? GhiChu2 { get; set; }
public int? SoBenhAnNgoaiTru_Id { get; set; }
public string? DieuTriDuPhong { get; set; }
public int? DoiTuong_Id { get; set; }
public decimal? BMI { get; set; }
public bool? KhoaDuDieu { get; set; }
public int? NguoiKhoa_Id { get; set; }
public DateTime? NgayKhoa { get; set; }
public DateTime? ThoiGianKhoa { get; set; }
public int? ChuyenKhoa_Id { get; set; }
public DateTime? ThoiGianNhapVienDuKien { get; set; }
public decimal? TyLeMo { get; set; }
public decimal? VongBung { get; set; }
public decimal? TLDG_MP { get; set; }
public decimal? TLDG_MT { get; set; }
public decimal? TKLT_MP { get; set; }
public decimal? TKLT_MT { get; set; }
public string? SieuHienVi { get; set; }
public string? SoiDayMat { get; set; }
public string? TKLT_MP_Text { get; set; }
public string? TKLT_MT_Text { get; set; }
public decimal? NhanAp_MT { get; set; }
public decimal? NhanAp_MP { get; set; }
public DateTime? NghiOm_TuNgay { get; set; }
public DateTime? NghiOm_DenNgay { get; set; }
public string? TLDG_MT_Text { get; set; }
public string? TLDG_MP_Text { get; set; }
public int? BenhAn_ID { get; set; }
public int? BenhManTinh_ID { get; set; }

        public KhamBenh()
        {
        }
    }
}

