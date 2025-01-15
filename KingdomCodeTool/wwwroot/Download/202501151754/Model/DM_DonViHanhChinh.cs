namespace Data.Model
{
    public partial class DM_DonViHanhChinh : BaseModel
    {
        public int? DonViHanhChinh_Id { get; set; }
public string? MaDonVi { get; set; }
public string? TenDonVi { get; set; }
public int? CapDonVi { get; set; }
public int? CapTren_Id { get; set; }
public int? MaVung_Id { get; set; }
public int? KhuVucLuuTru_Id { get; set; }
public bool? TamNgung { get; set; }
public string? TenTat { get; set; }
public string? TenTat_2 { get; set; }
public string? TenTat_3 { get; set; }
public string? TenKhongDau { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? SiteCode { get; set; }
public int? Mapping_Public_Id { get; set; }
public string? MaDonVi_HSSK { get; set; }

        public DM_DonViHanhChinh()
        {
        }
    }
}

