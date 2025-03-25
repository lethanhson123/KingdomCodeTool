namespace Data_eHospital_DongNai_A.Model
{
    public partial class KhamBenh_ToaThuoc : BaseModel
    {
        [Key]
        public int? KhamBenh_ToaThuoc_Id { get; set; }
public string? SoThuTuToa { get; set; }
public string? LoaiToaThuoc { get; set; }
public int? KhamBenh_Id { get; set; }
public int? BacSi_Id { get; set; }
public DateTime? NgayToaThuoc { get; set; }
public DateTime? ThoiGianToaThuoc { get; set; }
public bool? HuyToaThuoc { get; set; }
public string? GhiChu { get; set; }
public int? ChungTuPhatThuoc_Id { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public int? KhoXuat_Id { get; set; }
public bool? Duyet { get; set; }
public DateTime? NgayDuyet { get; set; }
public DateTime? ThoiGianDuyet { get; set; }
public int? NguoiDuyet_Id { get; set; }
public DateTime? ThoiGianTao { get; set; }

        public KhamBenh_ToaThuoc()
        {
        }
    }
}

