namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class T_FK_Xref : BaseModel
    {
        [Key]
        public int? ID { get; set; }
public string? ConstraintName { get; set; }
public string? MasterTable { get; set; }
public string? MasterColumn { get; set; }
public string? ChildTable { get; set; }
public string? ChildColumn { get; set; }
public int? FKOrder { get; set; }

        public T_FK_Xref()
        {
        }
    }
}

