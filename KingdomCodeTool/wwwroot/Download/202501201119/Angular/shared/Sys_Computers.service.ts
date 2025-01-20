import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Computers } from './Sys_Computers.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ComputersService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Computer_Id', 'ComputerName', 'IPAddress', 'LastLoginTime', 'IsLogin', 'LoginTime', 'UserName', 'UserDomainName'];

    List: Sys_Computers[] | undefined;
    ListFilter: Sys_Computers[] | undefined;
    FormData!: Sys_Computers;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Computers";
    }
}

