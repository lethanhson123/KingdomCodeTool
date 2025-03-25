namespace Data_eHospital_DongNai_A.Model
{
    public partial class KhamBenh_SinhHieu : BaseModel
    {
        [Key]
        public int? BenhNhan_Id { get; set; }
public int? Mach { get; set; }
public int? HuyetApThap { get; set; }
public int? HuyetApCao { get; set; }
public int? NhipTho { get; set; }
public decimal? NhietDo { get; set; }
public decimal? ChieuCao { get; set; }
public decimal? CanNang { get; set; }
public decimal? BMI { get; set; }

        public KhamBenh_SinhHieu()
        {
        }
    }
}

