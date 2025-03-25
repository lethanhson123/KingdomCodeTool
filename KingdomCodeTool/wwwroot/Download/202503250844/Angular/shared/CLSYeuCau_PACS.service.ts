import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSYeuCau_PACS } from './CLSYeuCau_PACS.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSYeuCau_PACSService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'PACS_ID', 'CLSYeuCau_ID'];

    List: CLSYeuCau_PACS[] | undefined;
    ListFilter: CLSYeuCau_PACS[] | undefined;
    FormData!: CLSYeuCau_PACS;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSYeuCau_PACS";
    }
}

