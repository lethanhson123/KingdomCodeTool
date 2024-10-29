namespace Data.Model
{
    public partial class ThanhVien : BaseModel
    {
        public long? ID { get; set; }
public long? ParentID { get; set; }
public string? ParentName { get; set; }
public DateTime? CreatedDate { get; set; }
public long? CreatedMembershipID { get; set; }
public DateTime? LastUpdatedDate { get; set; }
public long? LastUpdatedMembershipID { get; set; }
public int? RowVersion { get; set; }
public int? SortOrder { get; set; }
public bool? Active { get; set; }
public string? TypeName { get; set; }
public string? Name { get; set; }
public string? Code { get; set; }
public string? Note { get; set; }
public string? Display { get; set; }
public string? FileName { get; set; }
public string? Description { get; set; }
public string? HTMLContent { get; set; }
public long? DanhMucNgonNguID { get; set; }
public long? DanhMucUngDungID { get; set; }
public string? DanhMucNgonNguName { get; set; }
public string? DanhMucUngDungName { get; set; }
public long? DanhMucBenhVienID { get; set; }
public string? DanhMucBenhVienName { get; set; }
public long? DanhMucPhongBanID { get; set; }
public string? DanhMucPhongBanName { get; set; }
public long? DanhMucChucDanhID { get; set; }
public string? DanhMucChucDanhName { get; set; }
public string? Email { get; set; }
public string? DienThoai { get; set; }
public string? DiaChi { get; set; }
public string? CCCD { get; set; }
public string? TaiKhoan { get; set; }
public string? MatKhau { get; set; }
public string? GUIDCode { get; set; }

        public ThanhVien()
        {
        }
    }
}

