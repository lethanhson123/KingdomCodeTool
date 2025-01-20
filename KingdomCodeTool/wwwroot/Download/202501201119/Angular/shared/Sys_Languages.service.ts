import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Languages } from './Sys_Languages.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_LanguagesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Language_Id', 'Language_Name', 'Language_Name_En', 'Language_Name_Ru', 'Enabled'];

    List: Sys_Languages[] | undefined;
    ListFilter: Sys_Languages[] | undefined;
    FormData!: Sys_Languages;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Languages";
    }
}

