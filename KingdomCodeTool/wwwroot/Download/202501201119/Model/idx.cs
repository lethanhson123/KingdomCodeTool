namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class idx : BaseModel
    {
        [Key]
        public string? Menu_Code { get; set; }
public string? Menu_Name { get; set; }
public int? idx { get; set; }

        public idx()
        {
        }
    }
}

