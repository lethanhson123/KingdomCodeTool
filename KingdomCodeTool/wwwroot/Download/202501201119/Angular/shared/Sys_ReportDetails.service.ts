import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_ReportDetails } from './Sys_ReportDetails.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ReportDetailsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ReportDetail_Id', 'Report_Id', 'Idx', 'SubReport_Name', 'Procedure_Name', 'Enabled', 'Attribute1', 'Attribute2', 'Attribute3', 'Attribute4', 'Attribute5'];

    List: Sys_ReportDetails[] | undefined;
    ListFilter: Sys_ReportDetails[] | undefined;
    FormData!: Sys_ReportDetails;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_ReportDetails";
    }
}

