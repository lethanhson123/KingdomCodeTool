import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSYeuCau_QMS } from './CLSYeuCau_QMS.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSYeuCau_QMSService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSYeuCau_Id', 'SoTT', 'HangDoi_Idx', 'HangDoi_Details', 'KhuVuc', 'App'];

    List: CLSYeuCau_QMS[] | undefined;
    ListFilter: CLSYeuCau_QMS[] | undefined;
    FormData!: CLSYeuCau_QMS;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSYeuCau_QMS";
    }
}

