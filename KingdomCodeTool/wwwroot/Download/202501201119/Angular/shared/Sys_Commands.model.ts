import { Base } from "./Base.model";

export class Sys_Commands extends Base{
Command_Id?: number;
Command_Name?: string;
Command_Text?: string;
Function_Id?: number;
IsCommandButton?: boolean;
IsCommandMenu?: boolean;
IsCommandBar?: boolean;
DefaultRight?: boolean;
Enabled?: boolean;
SetPermission?: boolean;

}


