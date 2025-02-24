import { Base } from "./Base.model";

export class Sys_AppSettings extends Base{
Setting_Id?: number;
Code?: string;
Language_Id?: string;
Value?: string;
Description?: string;
Locked?: boolean;
SystemEditOnly?: boolean;
CreationDate?: Date;
CreatedBy?: number;
LastUpdateDate?: Date;
LastUpdatedBy?: number;

}


