import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_DataTypes } from './Sys_DataTypes.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_DataTypesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'DataType_Id', 'DataType_Code', 'DataType_Group', 'Description', 'Enabled', 'Remark', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];

    List: Sys_DataTypes[] | undefined;
    ListFilter: Sys_DataTypes[] | undefined;
    FormData!: Sys_DataTypes;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_DataTypes";
    }
}

