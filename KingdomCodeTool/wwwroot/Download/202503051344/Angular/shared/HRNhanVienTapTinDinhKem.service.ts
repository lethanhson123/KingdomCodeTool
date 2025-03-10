import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRNhanVienTapTinDinhKem } from './HRNhanVienTapTinDinhKem.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRNhanVienTapTinDinhKemService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName'];

    List: HRNhanVienTapTinDinhKem[] | undefined;
    ListFilter: HRNhanVienTapTinDinhKem[] | undefined;
    FormData!: HRNhanVienTapTinDinhKem;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRNhanVienTapTinDinhKem";
    }
}

