import { Base } from "./Base.model";

export class Sys_Functions extends Base{
Function_Id?: number;
Function_Name?: string;
Function_Class?: string;
Module_Id?: number;
System_Function?: boolean;
Report_Function?: boolean;
Description?: string;
Enabled?: boolean;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;

}


