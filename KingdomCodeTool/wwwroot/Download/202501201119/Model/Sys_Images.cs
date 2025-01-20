namespace Data_eHospital_DongNai_A_System.Model
{
    public partial class Sys_Images : BaseModel
    {
        [Key]
        public int? Image_Id { get; set; }
public int? User_Id { get; set; }
public string? User_Image { get; set; }
public int? Menu_Id { get; set; }
public string? MenuBar_Icon { get; set; }
public string? MenuBar_Icon_File { get; set; }
public string? LeftMenu_SmallIcon { get; set; }
public string? LeftMenu_SmallIcon_File { get; set; }
public string? LeftMenu_MediumIcon { get; set; }
public string? LeftMenu_MediumIcon_File { get; set; }
public string? LeftMenu_LargeIcon { get; set; }
public string? LeftMenu_LargeIcon_File { get; set; }

        public Sys_Images()
        {
        }
    }
}

