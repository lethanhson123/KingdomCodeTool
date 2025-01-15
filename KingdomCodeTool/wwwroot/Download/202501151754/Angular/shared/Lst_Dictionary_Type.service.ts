import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lst_Dictionary_Type } from 'src/app/shared/Lst_Dictionary_Type.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Lst_Dictionary_TypeService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Dictionary_Type_Id', 'Dictionary_Type_Code', 'Dictionary_Type_Name', 'Dictionary_Type_Name_En', 'Dictionary_Type_Name_Ru', 'Level', 'Parent_Id', 'Idx', 'Table_Name', 'Procedure_Name', 'UsingColumns', 'ListOfValueColumns', 'ComboBoxColumns', 'RequiredColumns', 'Enabled', 'LoadControl', 'IsSystem', 'Attribute1', 'Attribute2', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By', 'ShowRowNumberValue'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Lst_Dictionary_Type";
    }
}

