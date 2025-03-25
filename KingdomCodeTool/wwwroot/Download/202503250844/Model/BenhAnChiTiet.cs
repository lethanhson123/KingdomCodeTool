namespace Data_eHospital_DongNai_A.Model
{
    public partial class BenhAnChiTiet : BaseModel
    {
        [Key]
        public int? BenhAnChiTiet_Id { get; set; }
public int? BenhAn_Id { get; set; }
public string? LyDoVaoVien { get; set; }
public string? QuaTrinhBenhLy { get; set; }
public string? TienSuBanThan { get; set; }
public bool? DiUng { get; set; }
public int? NgayDiUng { get; set; }
public bool? MaTuy { get; set; }
public int? NgayMaTuy { get; set; }
public bool? RuouBia { get; set; }
public int? NgayRuouBia { get; set; }
public bool? ThuocLa { get; set; }
public int? NgayThuocLa { get; set; }
public bool? ThuocLao { get; set; }
public int? NgayThuocLao { get; set; }
public bool? TienSuKhac { get; set; }
public int? NgayTienSuKhac { get; set; }
public string? TienSuGiaDinh { get; set; }
public string? KhamBenhToanThan { get; set; }
public int? Mach { get; set; }
public int? NhipTho { get; set; }
public int? NhietDo { get; set; }
public int? CanNang { get; set; }
public int? HuyetApCao { get; set; }
public int? HuyetApThap { get; set; }
public string? KhamBenhBoPhanTonThuong { get; set; }
public string? ThanKinh { get; set; }
public string? TuanHoan { get; set; }
public string? HoHap { get; set; }
public string? TieuHoa { get; set; }
public string? CoXuongKhop { get; set; }
public string? TietNieu { get; set; }
public string? SinhDuc { get; set; }
public string? KhamBenhKhac { get; set; }
public string? XetNghiemCLSCanLam { get; set; }
public string? TomTatBenhAn { get; set; }
public string? KhamBenhTienLuong { get; set; }
public string? HuongDanDieuTri { get; set; }
public string? QuaTrinhBenhLyVaDienBienLamSang { get; set; }
public string? XNMau { get; set; }
public string? XNTeBao { get; set; }
public string? XNBLGP { get; set; }
public string? XNXQuang { get; set; }
public string? XNSieuAm { get; set; }
public string? CacXNKhac { get; set; }
public string? PhuongPhapDieuTri { get; set; }
public string? PPTienPhauTaiU { get; set; }
public string? PPTienPhauTaiHach { get; set; }
public string? PPDonThuanTaiU { get; set; }
public string? PPDonThuanTaiHach { get; set; }
public string? PPPhauThuat { get; set; }
public string? PPHauPhauTaiU { get; set; }
public string? PPHauPhauTaiHach { get; set; }
public string? PPHoaChat { get; set; }
public string? PPSoDot { get; set; }
public string? PPDapUng { get; set; }
public string? PPDieuTriKhac { get; set; }
public string? TinhTrangNguoiBenhRaVien { get; set; }
public string? HuongDieuTriVaCheDoTiepTheo { get; set; }
public int? SoToXQuang { get; set; }
public int? SoToCTScanner { get; set; }
public int? SoToSieuAm { get; set; }
public int? SoToXetNghiem { get; set; }
public int? SoToKhac { get; set; }
public int? SoToHoSo { get; set; }
public string? TVaoVien { get; set; }
public string? NVaoVien { get; set; }
public string? MVaoVien { get; set; }
public string? GiaiDoanVaoVien { get; set; }
public bool? TaiBienDoPhauThau { get; set; }
public bool? TaiBienDoGayMe { get; set; }
public bool? TaiBienDoNhiemKhuan { get; set; }
public bool? TaiBienKhac { get; set; }
public string? TRaVien { get; set; }
public string? NRaVien { get; set; }
public string? MRaVien { get; set; }
public string? GiaDoanRaVien { get; set; }
public string? ChanDoanTruocPhauThuat { get; set; }
public string? ChanDoanSauPhauThuat { get; set; }
public string? KhamBenhBenhChinh { get; set; }
public string? TKhamBenh { get; set; }
public string? NKhamBenh { get; set; }
public string? MKhamBenh { get; set; }
public string? GiaiDoanKhamBenh { get; set; }
public string? KhamBenhBenhKemTheo { get; set; }
public string? KhamBenhPhanBiet { get; set; }
public int? TongSoNgayDieuTriSauPhauThuat { get; set; }
public int? TongSoLanPhauThuat { get; set; }
public string? HinhVeHoacAnh { get; set; }
public string? MoTaTonThuong { get; set; }
public string? LoiDanThayThuoc { get; set; }
public string? PPDT { get; set; }

        public BenhAnChiTiet()
        {
        }
    }
}

