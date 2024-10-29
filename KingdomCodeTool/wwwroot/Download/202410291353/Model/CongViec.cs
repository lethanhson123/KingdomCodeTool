namespace Data.Model
{
    public partial class CongViec : BaseModel
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
public long? DanhMucPhongBanYeuCauID { get; set; }
public string? DanhMucPhongBanYeuCauName { get; set; }
public long? DanhMucPhongBanGiaiQuyetID { get; set; }
public string? DanhMucPhongBanGiaiQuyetName { get; set; }
public long? ThanhVienYeuCauID { get; set; }
public string? ThanhVienYeuCauName { get; set; }
public string? ThanhVienYeuCauDienThoai { get; set; }
public string? ThanhVienYeuCauEmail { get; set; }
public long? ThanhVienGiaiQuyetID { get; set; }
public string? ThanhVienGiaiQuyetName { get; set; }
public string? ThanhVienGiaiQuyetDienThoai { get; set; }
public string? ThanhVienGiaiQuyetEmail { get; set; }
public long? DanhMucTinhTrangID { get; set; }
public string? DanhMucTinhTrangName { get; set; }
public DateTime? NgayYeuCau { get; set; }
public DateTime? NgayGiaiQuyet { get; set; }
public DateTime? NgayHoanThanh { get; set; }

        public CongViec()
        {
        }
    }
}

