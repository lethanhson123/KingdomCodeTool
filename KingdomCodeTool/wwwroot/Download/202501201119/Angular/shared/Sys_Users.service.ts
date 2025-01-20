import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Users } from './Sys_Users.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_UsersService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'User_Id', 'User_Code', 'User_Name', 'Language_Id', 'Domain_Id', 'User_Password', 'Suspend', 'User_Position', 'Allow_Change_Password', 'Expiration_Days', 'Expiration_Date', 'Encryption_Password', 'EmailAddress', 'PhoneNumber', 'FaxNumber', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By', 'Login_Time', 'Login_Hostname', 'IsLogin', 'Last_Login_Time', 'Last_Login_Hostname', 'MinPasswordLen', 'StrongPassword', 'Latin_Name', 'UserOption1', 'UserOption2', 'UserOption3', 'UserOption4', 'UserOption5', 'UserOption6', 'UserOption7', 'UserOption8', 'UserOption9', 'TrangThaiSuspend'];

    List: Sys_Users[] | undefined;
    ListFilter: Sys_Users[] | undefined;
    FormData!: Sys_Users;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Users";
    }
}

