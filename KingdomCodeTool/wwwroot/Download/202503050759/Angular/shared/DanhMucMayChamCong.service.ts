import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucMayChamCong } from './DanhMucMayChamCong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucMayChamCongService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName'];

    List: DanhMucMayChamCong[] | undefined;
    ListFilter: DanhMucMayChamCong[] | undefined;
    FormData!: DanhMucMayChamCong;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucMayChamCong";
    }
}

