namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Log_UpdateInformation : BaseModel
    {
        [Key]
        public string? Update_ID { get; set; }
public string? UpdateData_TableName { get; set; }
public int? UpdateData_Id { get; set; }
public DateTime? UpdateDate { get; set; }
public DateTime? UpdateDateTime { get; set; }
public int? UpdateDay { get; set; }
public int? UpdateMonth { get; set; }
public int? UpdateYear { get; set; }
public int? UpdateSecond { get; set; }
public int? UpdateMinute { get; set; }
public int? UpdateHour { get; set; }
public int? User_Id { get; set; }
public int? LoginSession_Id { get; set; }

        public Log_UpdateInformation()
        {
        }
    }
}

