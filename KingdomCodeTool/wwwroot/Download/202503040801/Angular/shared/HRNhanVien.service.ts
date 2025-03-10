import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRNhanVien } from './HRNhanVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRNhanVienService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'DanhMucTinhThanhID', 'DanhMucTinhThanhName', 'DanhMucQuanHuyenID', 'DanhMucQuanHuyenName', 'DanhMucXaPhuongID', 'DanhMucXaPhuongName', 'CCCD', 'Email', 'DiaChiThuongTru', 'DiaChi', 'DienThoai', 'IsNghiViec'];

    List: HRNhanVien[] | undefined;
    ListFilter: HRNhanVien[] | undefined;
    FormData!: HRNhanVien;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRNhanVien";
    }
}

