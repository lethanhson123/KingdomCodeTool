import { Base } from "./Base.model";

export class Sys_Computers extends Base{
Computer_Id?: number;
ComputerName?: string;
IPAddress?: string;
LastLoginTime?: Date;
IsLogin?: boolean;
LoginTime?: Date;
UserName?: string;
UserDomainName?: string;

}


