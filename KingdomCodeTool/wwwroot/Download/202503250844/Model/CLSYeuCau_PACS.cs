namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSYeuCau_PACS : BaseModel
    {
        [Key]
        public int? PACS_ID { get; set; }
public int? CLSYeuCau_ID { get; set; }

        public CLSYeuCau_PACS()
        {
        }
    }
}

