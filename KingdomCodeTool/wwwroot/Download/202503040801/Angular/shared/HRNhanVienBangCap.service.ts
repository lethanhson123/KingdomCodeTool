import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRNhanVienBangCap } from './HRNhanVienBangCap.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRNhanVienBangCapService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'DanhMucBangCapID', 'DanhMucBangCapName', 'DanhMucChuyenNganhID', 'DanhMucChuyenNganhName', 'DanhMucToChucDaoTaoID', 'DanhMucToChucDaoTaoName'];

    List: HRNhanVienBangCap[] | undefined;
    ListFilter: HRNhanVienBangCap[] | undefined;
    FormData!: HRNhanVienBangCap;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRNhanVienBangCap";
    }
}

