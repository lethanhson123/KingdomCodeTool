namespace Data.Model
{
    public partial class Lst_Dictionary : BaseModel
    {
        public int? Dictionary_Id { get; set; }
public int? Dictionary_Type_Id { get; set; }
public string? Dictionary_Type_Code { get; set; }
public string? Dictionary_Code { get; set; }
public string? Dictionary_Name { get; set; }
public string? Dictionary_Name_En { get; set; }
public string? Dictionary_Name_Ru { get; set; }
public int? Parent_Id { get; set; }
public int? Idx { get; set; }
public bool? Enabled { get; set; }
public string? Latin_Name { get; set; }
public string? Attribute1 { get; set; }
public string? Attribute2 { get; set; }
public string? Attribute3 { get; set; }
public string? Attribute4 { get; set; }
public DateTime? Creation_Date { get; set; }
public int? Created_By { get; set; }
public DateTime? Last_Update_Date { get; set; }
public int? Last_Updated_By { get; set; }

        public Lst_Dictionary()
        {
        }
    }
}

