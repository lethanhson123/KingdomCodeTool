import { Base } from "./Base.model";

export class Sys_Controls extends Base{
Control_Id?: number;
Project_Name?: string;
Form_Name?: string;
Control_Type?: string;
Control_Name?: string;
Table_Name?: string;
Other_Key?: string;
Container_Name?: string;
Idx?: number;
Lov_Available?: boolean;
Lov_DataGroup?: string;
Lov_Procedure?: string;
Lov_Control_Name_Desc?: string;
FontName?: string;
FontSize?: number;
FontStyle?: string;
BorderStyle?: number;
ControlLength?: number;
IsDateType?: boolean;
IsNumericType?: boolean;
Updating?: boolean;

}


