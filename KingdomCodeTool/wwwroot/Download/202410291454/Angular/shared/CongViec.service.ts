import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CongViec } from 'src/app/shared/CongViec.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CongViecService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'DanhMucPhongBanYeuCauID', 'DanhMucPhongBanYeuCauName', 'DanhMucPhongBanGiaiQuyetID', 'DanhMucPhongBanGiaiQuyetName', 'ThanhVienYeuCauID', 'ThanhVienYeuCauName', 'ThanhVienYeuCauDienThoai', 'ThanhVienYeuCauEmail', 'ThanhVienGiaiQuyetID', 'ThanhVienGiaiQuyetName', 'ThanhVienGiaiQuyetDienThoai', 'ThanhVienGiaiQuyetEmail', 'DanhMucTinhTrangID', 'DanhMucTinhTrangName', 'NgayYeuCau', 'NgayGiaiQuyet', 'NgayHoanThanh'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CongViec";
    }
}

