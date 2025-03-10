import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRNhanVienHopDong } from './HRNhanVienHopDong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRNhanVienHopDongService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'DanhMucHopDongID', 'DanhMucHopDongName', 'DanhMucBacLuongID', 'DanhMucBacLuongName', 'DanhMucChucDanhID', 'DanhMucChucDanhName', 'DanhMucChucVuID', 'DanhMucChucVuName', 'NgayBatDau', 'NgayKetThuc', 'HeSo'];

    List: HRNhanVienHopDong[] | undefined;
    ListFilter: HRNhanVienHopDong[] | undefined;
    FormData!: HRNhanVienHopDong;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRNhanVienHopDong";
    }
}

