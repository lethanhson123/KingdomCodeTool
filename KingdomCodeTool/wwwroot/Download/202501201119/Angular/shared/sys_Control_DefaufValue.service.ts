import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sys_Control_DefaufValue } from './sys_Control_DefaufValue.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class sys_Control_DefaufValueService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Control_DefaufValue_Id', 'Funtions_Class', 'Control_Name', 'DefaufValue', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_id'];

    List: sys_Control_DefaufValue[] | undefined;
    ListFilter: sys_Control_DefaufValue[] | undefined;
    FormData!: sys_Control_DefaufValue;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "sys_Control_DefaufValue";
    }
}

