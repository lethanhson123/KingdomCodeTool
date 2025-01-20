import { Base } from "./Base.model";

export class Sys_AutoTexts extends Base{
AutoText_Id?: number;
Definer_Id?: number;
OriginString?: string;
ReplaceString?: string;
IsAutoCorrect?: boolean;
ApplyToEveryone?: boolean;
Enabled?: boolean;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;

}


