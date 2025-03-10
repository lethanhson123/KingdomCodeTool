import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRChamCongChiTiet } from './HRChamCongChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRChamCongChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'Year', 'Month', 'Day', 'BatDau', 'KetThuc', 'ChamCong', 'DanhMucChamCongID', 'DanhMucChamCongName', 'DanhMucPhuCapID', 'DanhMucPhuCapName'];

    List: HRChamCongChiTiet[] | undefined;
    ListFilter: HRChamCongChiTiet[] | undefined;
    FormData!: HRChamCongChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRChamCongChiTiet";
    }
}

