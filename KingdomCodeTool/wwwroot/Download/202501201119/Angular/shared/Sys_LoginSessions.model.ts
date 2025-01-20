import { Base } from "./Base.model";

export class Sys_LoginSessions extends Base{
LoginSession_Id?: number;
User_Id?: number;
HostName?: string;
IPAddress?: string;
NOS_UserName?: string;
NOS_DomainName?: string;
ProcessId?: number;
LoginTime?: Date;
LogoutTime?: Date;

}


