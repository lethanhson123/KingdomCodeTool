import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRNhanVienPhuCap } from './HRNhanVienPhuCap.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRNhanVienPhuCapService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'DanhMucPhuCapID', 'DanhMucPhuCapName', 'HeSo'];

    List: HRNhanVienPhuCap[] | undefined;
    ListFilter: HRNhanVienPhuCap[] | undefined;
    FormData!: HRNhanVienPhuCap;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRNhanVienPhuCap";
    }
}

