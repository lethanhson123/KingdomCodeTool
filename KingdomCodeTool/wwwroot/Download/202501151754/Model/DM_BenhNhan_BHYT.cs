namespace Data.Model
{
    public partial class DM_BenhNhan_BHYT : BaseModel
    {
        public int? BenhNhan_BHYT_Id { get; set; }
public int? BenhNhan_Id { get; set; }
public int? LoaiBHYT { get; set; }
public string? SoThe { get; set; }
public DateTime? NgayCap { get; set; }
public DateTime? NgayHieuLuc { get; set; }
public DateTime? NgayHetHieuLuc { get; set; }
public int? TinhThanh_CapThe_Id { get; set; }
public int? BenhVien_KCB_Id { get; set; }
public bool? TamNgung { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public bool? Tren3Nam { get; set; }
public bool? Tren6Thang { get; set; }
public DateTime? NgayHuong5Nam { get; set; }

        public DM_BenhNhan_BHYT()
        {
        }
    }
}

