import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lst_Dictionary } from './Lst_Dictionary.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Lst_DictionaryService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Dictionary_Id', 'Dictionary_Type_Id', 'Dictionary_Type_Code', 'Dictionary_Code', 'Dictionary_Name', 'Dictionary_Name_En', 'Dictionary_Name_Ru', 'Parent_Id', 'Idx', 'Enabled', 'Latin_Name', 'Attribute1', 'Attribute2', 'Attribute3', 'Attribute4', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Lst_Dictionary";
    }
}

