namespace Data_eHospital_DongNai_A.Model
{
    public partial class NoiTru_TraThuocChiTiet : BaseModel
    {
        [Key]
        public int? NoiTru_TraThuocChiTiet_Id { get; set; }
public int? NoiTru_TraThuoc_Id { get; set; }
public int? ToaThuoc_Id { get; set; }
public int? Duoc_Id { get; set; }
public string? SoLuong { get; set; }
public string? TyLeVAT { get; set; }
public string? GiaTriVAT { get; set; }
public string? TyGia { get; set; }
public string? DonGiaDoanhThu { get; set; }
public string? DonGiaHoTro { get; set; }
public string? DonGiaHoTroChiTra { get; set; }
public string? DonGiaThanhToan { get; set; }
public bool? DaHoanTra { get; set; }
public int? ChungTuTra_Id { get; set; }
public string? TienTe_Id { get; set; }
public int? ChungTuChiTiet_Id { get; set; }
public int? LoaiGia_Id { get; set; }

        public NoiTru_TraThuocChiTiet()
        {
        }
    }
}

