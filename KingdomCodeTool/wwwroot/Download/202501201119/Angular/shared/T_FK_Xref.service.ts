import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { T_FK_Xref } from './T_FK_Xref.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class T_FK_XrefService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ConstraintName', 'MasterTable', 'MasterColumn', 'ChildTable', 'ChildColumn', 'FKOrder'];

    List: T_FK_Xref[] | undefined;
    ListFilter: T_FK_Xref[] | undefined;
    FormData!: T_FK_Xref;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "T_FK_Xref";
    }
}

