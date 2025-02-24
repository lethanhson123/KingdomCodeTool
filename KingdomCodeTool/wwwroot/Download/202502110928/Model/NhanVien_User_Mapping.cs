namespace Data_eHospital_DongNai_A_Dictionary.Model
{
    public partial class NhanVien_User_Mapping : BaseModel
    {
        [Key]
        public int? NhanVien_User_Id { get; set; }
public int? NhanVien_Id { get; set; }
public int? User_Id { get; set; }

        public NhanVien_User_Mapping()
        {
        }
    }
}

