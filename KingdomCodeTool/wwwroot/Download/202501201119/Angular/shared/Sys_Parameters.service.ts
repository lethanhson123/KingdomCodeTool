import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Parameters } from './Sys_Parameters.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ParametersService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Parameter_Id', 'Parameter_Code', 'Parameter_Type', 'Parameter_Name', 'Language_Id', 'DataType_Id', 'Max_Length', 'Default_Value_Type_Id', 'Default_Value', 'Enabled', 'Is_Report_Parameter', 'Is_Database_Parameter', 'Is_Common_Formula', 'Is_Common_Parameter', 'Is_Common_MethodParameter', 'Idx', 'Lov_Procedure', 'ComboData_Procedure', 'DataGroup', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By', 'Attribute1', 'Attribute2', 'Attribute3', 'Attribute4', 'Attribute5'];

    List: Sys_Parameters[] | undefined;
    ListFilter: Sys_Parameters[] | undefined;
    FormData!: Sys_Parameters;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Parameters";
    }
}

