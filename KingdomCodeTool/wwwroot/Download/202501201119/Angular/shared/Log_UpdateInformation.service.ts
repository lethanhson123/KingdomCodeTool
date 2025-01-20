import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Log_UpdateInformation } from './Log_UpdateInformation.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Log_UpdateInformationService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Update_ID', 'UpdateData_TableName', 'UpdateData_Id', 'UpdateDate', 'UpdateDateTime', 'UpdateDay', 'UpdateMonth', 'UpdateYear', 'UpdateSecond', 'UpdateMinute', 'UpdateHour', 'User_Id', 'LoginSession_Id'];

    List: Log_UpdateInformation[] | undefined;
    ListFilter: Log_UpdateInformation[] | undefined;
    FormData!: Log_UpdateInformation;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Log_UpdateInformation";
    }
}

