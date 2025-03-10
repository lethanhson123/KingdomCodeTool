import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucHopDong } from './DanhMucHopDong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucHopDongService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName'];

    List: DanhMucHopDong[] | undefined;
    ListFilter: DanhMucHopDong[] | undefined;
    FormData!: DanhMucHopDong;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucHopDong";
    }
}

