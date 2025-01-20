import { Base } from "./Base.model";

export class Sys_Users extends Base{
User_Id?: number;
User_Code?: string;
User_Name?: string;
Language_Id?: string;
Domain_Id?: number;
User_Password?: string;
Suspend?: boolean;
User_Position?: string;
Allow_Change_Password?: boolean;
Expiration_Days?: number;
Expiration_Date?: Date;
Encryption_Password?: boolean;
EmailAddress?: string;
PhoneNumber?: string;
FaxNumber?: string;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;
Login_Time?: Date;
Login_Hostname?: string;
IsLogin?: boolean;
Last_Login_Time?: Date;
Last_Login_Hostname?: string;
MinPasswordLen?: number;
StrongPassword?: boolean;
Latin_Name?: string;
UserOption1?: string;
UserOption2?: string;
UserOption3?: string;
UserOption4?: string;
UserOption5?: string;
UserOption6?: string;
UserOption7?: string;
UserOption8?: string;
UserOption9?: string;
TrangThaiSuspend?: boolean;

}


