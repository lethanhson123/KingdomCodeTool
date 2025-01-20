import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Reports } from './Sys_Reports.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ReportsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Report_Id', 'Report_Code', 'Report_Name', 'Report_File', 'PaperSize_Id', 'Landscape_Orientation', 'AllowPreview', 'AllowPrintOut', 'Pull_ReportData', 'Package_Name', 'Procedure_Name', 'ReportFormNumber', 'ReportFormVersion', 'ReportFormEffectedDate', 'Enabled', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By', 'Attribute1', 'Attribute2', 'Attribute3', 'Attribute4', 'Attribute5', 'Attribute6', 'ExportToDatabase', 'ExecDirectToDatabase', 'IsMultiSiteReport', 'DefaultSiteCode'];

    List: Sys_Reports[] | undefined;
    ListFilter: Sys_Reports[] | undefined;
    FormData!: Sys_Reports;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Reports";
    }
}

