namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_KhamBenh : BaseModel
    {
        [Key]
        public int? KhamBenh_Id { get; set; }
public int? BenhAn_Id { get; set; }
public int? LuuTru_Id { get; set; }
public int? LanKham { get; set; }
public DateTime? NgayKham { get; set; }
public DateTime? ThoiGianKham { get; set; }
public int? BasSiKham_Id { get; set; }
public int? DieuDuong_Id { get; set; }
public string? DinhBenh { get; set; }
public string? DienBien { get; set; }
public string? LoiDan { get; set; }
public int? CheDoAnUong_Id { get; set; }
public int? CheDoChamSoc_Id { get; set; }
public int? KhoDuoc_Id { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? DoiTuong_Id { get; set; }
public int? CapHoLy_Id { get; set; }
public string? LoaiToaThuoc { get; set; }
public bool? Ravien { get; set; }
public bool? KhamNgoaiTru { get; set; }
public bool? ThuocDacTri { get; set; }
public DateTime? NgayTaiKham { get; set; }
public int? SoNgayHenTaiKham { get; set; }
public int? ChungTuPhatThuoc_Id { get; set; }
public int? BenhAn_PhatDo_NgayDieuTri_Id { get; set; }
public int? InLai { get; set; }
public int? InLai_User_Id { get; set; }
public int? NoiNhanThuoc_ID { get; set; }
public int? STT { get; set; }
public string? SoPhieuHen { get; set; }

        public NoiTru_KhamBenh()
        {
        }
    }
}

