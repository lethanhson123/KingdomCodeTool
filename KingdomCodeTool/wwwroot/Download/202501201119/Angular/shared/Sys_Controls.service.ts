import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Controls } from './Sys_Controls.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ControlsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Control_Id', 'Project_Name', 'Form_Name', 'Control_Type', 'Control_Name', 'Table_Name', 'Other_Key', 'Container_Name', 'Idx', 'Lov_Available', 'Lov_DataGroup', 'Lov_Procedure', 'Lov_Control_Name_Desc', 'FontName', 'FontSize', 'FontStyle', 'BorderStyle', 'ControlLength', 'IsDateType', 'IsNumericType', 'Updating'];

    List: Sys_Controls[] | undefined;
    ListFilter: Sys_Controls[] | undefined;
    FormData!: Sys_Controls;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Controls";
    }
}

