import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NhanVien_User_Mapping } from './NhanVien_User_Mapping.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NhanVien_User_MappingService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'NhanVien_User_Id', 'NhanVien_Id', 'User_Id'];

    List: NhanVien_User_Mapping[] | undefined;
    ListFilter: NhanVien_User_Mapping[] | undefined;
    FormData!: NhanVien_User_Mapping;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NhanVien_User_Mapping";
    }
}

