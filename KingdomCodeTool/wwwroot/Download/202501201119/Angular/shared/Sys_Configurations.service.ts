import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Configurations } from './Sys_Configurations.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ConfigurationsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'AllowNullUserPassword', 'ChangePasswordOnFirstLogon', 'IsUsingStrongPassword', 'UserPasswordExpiryDay', 'TimesOfHistoryPasswordNotAllow', 'MinPasswordLen', 'PasswordExpiredNotifyDay'];

    List: Sys_Configurations[] | undefined;
    ListFilter: Sys_Configurations[] | undefined;
    FormData!: Sys_Configurations;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Configurations";
    }
}

