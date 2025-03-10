import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucGiamTru } from './DanhMucGiamTru.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucGiamTruService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'HeSo'];

    List: DanhMucGiamTru[] | undefined;
    ListFilter: DanhMucGiamTru[] | undefined;
    FormData!: DanhMucGiamTru;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucGiamTru";
    }
}

