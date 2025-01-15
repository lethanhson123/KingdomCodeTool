namespace Data.Model
{
    public partial class Lst_Dictionary_Type : BaseModel
    {
        public int? Dictionary_Type_Id { get; set; }
public string? Dictionary_Type_Code { get; set; }
public string? Dictionary_Type_Name { get; set; }
public string? Dictionary_Type_Name_En { get; set; }
public string? Dictionary_Type_Name_Ru { get; set; }
public int? Level { get; set; }
public int? Parent_Id { get; set; }
public int? Idx { get; set; }
public string? Table_Name { get; set; }
public string? Procedure_Name { get; set; }
public string? UsingColumns { get; set; }
public string? ListOfValueColumns { get; set; }
public string? ComboBoxColumns { get; set; }
public string? RequiredColumns { get; set; }
public bool? Enabled { get; set; }
public bool? LoadControl { get; set; }
public bool? IsSystem { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }
public bool? ShowRowNumberValue { get; set; }

        public Lst_Dictionary_Type()
        {
        }
    }
}

