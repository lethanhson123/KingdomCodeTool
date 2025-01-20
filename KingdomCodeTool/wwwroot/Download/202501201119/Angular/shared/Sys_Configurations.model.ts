import { Base } from "./Base.model";

export class Sys_Configurations extends Base{
AllowNullUserPassword?: boolean;
ChangePasswordOnFirstLogon?: boolean;
IsUsingStrongPassword?: boolean;
UserPasswordExpiryDay?: number;
TimesOfHistoryPasswordNotAllow?: number;
MinPasswordLen?: number;
PasswordExpiredNotifyDay?: number;

}


