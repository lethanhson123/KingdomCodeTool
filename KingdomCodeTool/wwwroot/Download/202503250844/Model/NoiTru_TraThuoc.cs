namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_TraThuoc : BaseModel
    {
        [Key]
        public int? NoiTru_TraThuoc_Id { get; set; }
public string? SoPhieu { get; set; }
public int? BenhAn_Id { get; set; }
public int? LuuTru_Id { get; set; }
public DateTime? NgayTra { get; set; }
public int? NguoiNhan_Id { get; set; }
public string? GhiChu { get; set; }
public string? TrangThai { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public string? DienGiaiNghiepVuPhatSinh { get; set; }
public DateTime? ThoiGianTra { get; set; }
public int? ChungTu_Id { get; set; }

        public NoiTru_TraThuoc()
        {
        }
    }
}

