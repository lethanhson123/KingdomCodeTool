namespace Data.Model
{
    public partial class DM_BenhVien : BaseModel
    {
        public int? BenhVien_Id { get; set; }
public string? MaBenhVien { get; set; }
public string? TenBenhVien { get; set; }
public string? TenBenhVien_En { get; set; }
public string? TenBenhVien_Ru { get; set; }
public string? DiaChi { get; set; }
public int? Hang_Id { get; set; }
public int? Loai_Id { get; set; }
public int? Tuyen_Id { get; set; }
public int? CapQuanLy_Id { get; set; }
public int? TinhThanhPho_Id { get; set; }
public bool? TamNgung { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }

        public DM_BenhVien()
        {
        }
    }
}

