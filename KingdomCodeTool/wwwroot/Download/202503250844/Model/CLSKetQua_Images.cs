namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSKetQua_Images : BaseModel
    {
        [Key]
        public int? Images_Id { get; set; }
public int? CLSKetQua_Id { get; set; }
public string? File_Name_Origin { get; set; }
public string? File_Name { get; set; }
public int? Idx { get; set; }
public string? TenHinh { get; set; }
public string? MoTaHinh { get; set; }
public bool? TamNgung { get; set; }
public DateTime? NgayTao { get; set; }
public int? NguoiTao_Id { get; set; }
public DateTime? NgayCapNhat { get; set; }
public int? NguoiCapNhat_Id { get; set; }
public bool? ChonInMacDinh { get; set; }

        public CLSKetQua_Images()
        {
        }
    }
}

