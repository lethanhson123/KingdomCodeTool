import { Base } from "./Base.model";

export class Sys_Menus extends Base{
Menu_Id?: number;
Menu_Code?: string;
Menu_Name?: string;
Language_Id?: string;
Menu_Level?: number;
Idx?: number;
Parent_Id?: number;
Function_Id?: number;
Function_Argument?: string;
Default_Right?: boolean;
Enabled?: boolean;
MenuBar?: boolean;
MenuLeft?: boolean;
Is_System?: boolean;
Is_Report?: boolean;
Report_Id?: number;
Shortcut_Key?: string;
Shortcut_Character?: string;
WindowState?: number;
ShowDialog?: boolean;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;
Function_Argument_Notes?: string;
Remark?: string;

}


