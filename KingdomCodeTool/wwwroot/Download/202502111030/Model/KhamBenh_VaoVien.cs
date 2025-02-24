namespace Data_eHospital_DongNai_A.Model
{
    public partial class KhamBenh_VaoVien : BaseModel
    {
        [Key]
        public int? KhamBenhVaoVien_Id { get; set; }
public string? SoPhieu { get; set; }
public int? TiepNhan_Id { get; set; }
public int? KhamBenh_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public string? NguoiLienHe { get; set; }
public string? DienThoaiLienHe { get; set; }
public string? NoiLamViec { get; set; }
public string? ChanDoanNoiGioiThieu { get; set; }
public DateTime? NgayKham { get; set; }
public DateTime? ThoiGianKham { get; set; }
public string? LyDoVaoVien { get; set; }
public string? QuaTrinhBenhLy { get; set; }
public string? TienSuBanThan { get; set; }
public string? TienSuGiaDinh { get; set; }
public string? KhamXetToanThan { get; set; }
public string? KhamXetCacBoPhan { get; set; }
public string? KhamXetKQLS { get; set; }
public string? ChanDoanVao { get; set; }
public int? ICDKhamXet_Id { get; set; }
public string? DaXuLy { get; set; }
public DateTime? NgayRa { get; set; }
public DateTime? ThoiGianRa { get; set; }
public int? NhapKhoa_Id { get; set; }
public int? ChuyenVien_Id { get; set; }
public string? ChuY { get; set; }
public int? Mach { get; set; }
public decimal? NhietDo { get; set; }
public int? HuyetApCao { get; set; }
public int? HuyetApThap { get; set; }
public int? NhipTho { get; set; }
public decimal? CanNang { get; set; }
public decimal? ChieuCao { get; set; }
public int? BacSi_Id { get; set; }
public int? XuTruKhamBenh_Id { get; set; }
public bool? CapCuu { get; set; }
public DateTime? NgayTaiNan { get; set; }
public DateTime? ThoiGianTaiNan { get; set; }
public int? NoiTaiNan_TinhThanh_Id { get; set; }
public int? NoiTaiNan_QuanHuyen_Id { get; set; }
public int? NoiTaiNan_PhuongXa_Id { get; set; }
public string? NoiTaiNan_DiaChi { get; set; }
public int? DiaDiemTaiNan_Id { get; set; }
public int? BoPhanBiThuong_Id { get; set; }
public int? MucDo_Id { get; set; }
public int? DienBienSauTN_Id { get; set; }
public int? XuTriSauTN_Id { get; set; }
public int? NguyenNhan_Id { get; set; }
public int? NguyenNhanChiTiet_Id { get; set; }
public int? ICD_NguyenNhan { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? SoBenhAn { get; set; }
public string? DiaDiemTaiNan { get; set; }
public bool? SoCapCuu_Co { get; set; }
public bool? SoCapCuu_Khong { get; set; }
public string? PhuongTienDuaDen { get; set; }
public string? PhuongTienSuDung { get; set; }
public bool? OTo { get; set; }
public bool? TauHoa { get; set; }
public bool? XeGanMay { get; set; }
public bool? XeTuChe { get; set; }
public bool? TuGayTaiNan { get; set; }
public string? Khac { get; set; }
public bool? DoiMuBH_Co { get; set; }
public bool? DoiMuBH_Khong { get; set; }
public bool? DoiMuBH_KhongRo { get; set; }
public bool? GaiQuaiMuBH_Co { get; set; }
public bool? GaiQuaiMuBH_Khong { get; set; }
public bool? GaiQuaiMuBH_KhongRo { get; set; }
public bool? MuBHVo_Co { get; set; }
public bool? MuBHVo_Khong { get; set; }
public bool? MuBHVo_KhongRo { get; set; }
public string? MuBH_TenHang { get; set; }
public bool? MuBH_TenHang_KhongRo { get; set; }
public bool? Ruou_Co { get; set; }
public bool? Ruou_Khong { get; set; }
public bool? Ruou_KhongRo { get; set; }
public bool? CamQuan_Co { get; set; }
public bool? CamQuan_Khong { get; set; }
public string? NongDoCon_Mau { get; set; }
public bool? NongDoCon_Mau_KhongDo { get; set; }
public string? NongDoCon_HoiTho { get; set; }
public bool? NongDoCon_HoiTho_KhongDo { get; set; }
public bool? ChanThuongNao_Co { get; set; }
public bool? ChanThuongNao_Khong { get; set; }
public string? Glassgow { get; set; }
public bool? ChanThuongCotSongCo_Co { get; set; }
public bool? ChanThuongCotSongCo_Khong { get; set; }
public bool? ChanThuongHamMat { get; set; }
public bool? ChanThuongChi { get; set; }
public bool? ChanThuongNguc { get; set; }
public bool? DaChanThuong { get; set; }
public bool? NhapVien_Co { get; set; }
public bool? NhapVien_Khong { get; set; }
public bool? MoCapCuu_Co { get; set; }
public bool? MoCapCuu_Khong { get; set; }
public bool? TuVong_TruocBV { get; set; }
public bool? TuVong_TrongBV { get; set; }
public bool? XinVe { get; set; }
public string? NoiChuyenTuyen { get; set; }
public bool? KhongChuyen { get; set; }
public int? BenhAnNoiTru_ID { get; set; }
public int? NoiChuyen_ID { get; set; }
public int? LoaiTaiNan_ID { get; set; }

        public KhamBenh_VaoVien()
        {
        }
    }
}

