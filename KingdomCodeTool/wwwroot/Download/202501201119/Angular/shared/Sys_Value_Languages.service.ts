import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Value_Languages } from './Sys_Value_Languages.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_Value_LanguagesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Value_Id', 'Language_Id', 'Key_Id', 'Key_Type', 'Key_Column', 'Key_Code', 'Key_Value'];

    List: Sys_Value_Languages[] | undefined;
    ListFilter: Sys_Value_Languages[] | undefined;
    FormData!: Sys_Value_Languages;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Value_Languages";
    }
}

