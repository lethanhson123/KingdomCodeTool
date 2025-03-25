namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSYeuCau_ThayDoi : BaseModel
    {
        [Key]
        public int? CLSYeuCau_ThayDoi_Id { get; set; }
public int? CLSYeuCau_Id { get; set; }
public int? PhongBan_Id { get; set; }
public int? PhongBan_ThayDoi_Id { get; set; }
public int? LanThayDoi { get; set; }
public DateTime? NgayThayDoi { get; set; }
public DateTime? ThoiGianThayDoi { get; set; }
public int? NguoiThayDoi_Id { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }

        public CLSYeuCau_ThayDoi()
        {
        }
    }
}

