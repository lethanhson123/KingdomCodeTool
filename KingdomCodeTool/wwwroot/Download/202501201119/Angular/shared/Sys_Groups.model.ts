import { Base } from "./Base.model";

export class Sys_Groups extends Base{
Group_Id?: number;
Group_Code?: string;
Group_Name?: string;
Language_Id?: string;
Domain_Id?: number;
Admin?: boolean;
DefaultGroup?: boolean;
Member?: number;
Description?: string;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;
Latin_Name?: string;

}


