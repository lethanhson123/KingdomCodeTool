namespace Data.Model
{
    public partial class ThanhVienLichSuTruyCap : BaseModel
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
public string? URL { get; set; }
public string? Token { get; set; }
public string? IPAddress { get; set; }
public DateTime? NgayGhiNhan { get; set; }
public string? KinhDo { get; set; }
public string? ViDo { get; set; }
public string? DanhMucQuocGiaName { get; set; }
public string? DanhMucTinhThanhName { get; set; }
public string? DanhMucQuanHuyenName { get; set; }
public string? DanhMucXaPhuongName { get; set; }

        public ThanhVienLichSuTruyCap()
        {
        }
    }
}

