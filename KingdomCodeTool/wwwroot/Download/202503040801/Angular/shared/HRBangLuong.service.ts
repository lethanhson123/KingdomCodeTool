import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRBangLuong } from './HRBangLuong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRBangLuongService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'NgayGhiNhan', 'Year', 'Month', 'Day', 'ChamCong', 'Luong', 'PhuCap', 'GiamTru', 'Thue', 'ThanhTien'];

    List: HRBangLuong[] | undefined;
    ListFilter: HRBangLuong[] | undefined;
    FormData!: HRBangLuong;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRBangLuong";
    }
}

