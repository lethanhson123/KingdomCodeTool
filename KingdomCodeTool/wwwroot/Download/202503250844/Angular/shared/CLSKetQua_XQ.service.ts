import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQua_XQ } from './CLSKetQua_XQ.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQua_XQService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSKetQua_XQ_Id', 'SoPhieu', 'CLSYeuCau_Id', 'ID_CT'];

    List: CLSKetQua_XQ[] | undefined;
    ListFilter: CLSKetQua_XQ[] | undefined;
    FormData!: CLSKetQua_XQ;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQua_XQ";
    }
}

