import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_ReportParameters } from './Sys_ReportParameters.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ReportParametersService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ReportParameter_Id', 'Report_Id', 'Parameter_Id', 'Idx', 'Private_Parameter_Code', 'Report_Parameter_Code', 'Private_Parameter_Name', 'Parameter_Name', 'Language_Id', 'Crlf', 'Max_Length', 'Default_Value_Type_Id', 'Default_Value', 'Is_Report_Parameter', 'Is_Database_Parameter', 'ReadOnly', 'Enabled', 'IsNotNull', 'ControlType_Id', 'Multiline', 'Width', 'Height', 'Private_DataGroup', 'DataGroup', 'SaveDefaultValue', 'PrimaryParameterIdx', 'RelationParameterIdx', 'PrimaryFieldName', 'RelationFieldName', 'ReQueryData', 'Filter_Value_Type_Id', 'Filter_Value', 'LovEnabled', 'LovPrivate_DataGroup', 'LovDataGroup', 'LovUseSystemFunction', 'Visibled', 'Attribute1', 'Attribute2', 'Attribute3', 'Attribute4', 'Attribute5', 'SetReportFileBySelectedValue', 'ComboBox_ReturnValue', 'ComboBox_ReturnText'];

    List: Sys_ReportParameters[] | undefined;
    ListFilter: Sys_ReportParameters[] | undefined;
    FormData!: Sys_ReportParameters;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_ReportParameters";
    }
}

