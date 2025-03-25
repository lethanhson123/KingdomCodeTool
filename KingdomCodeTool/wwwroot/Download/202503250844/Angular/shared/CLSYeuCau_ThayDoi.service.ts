import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSYeuCau_ThayDoi } from './CLSYeuCau_ThayDoi.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSYeuCau_ThayDoiService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSYeuCau_ThayDoi_Id', 'CLSYeuCau_Id', 'PhongBan_Id', 'PhongBan_ThayDoi_Id', 'LanThayDoi', 'NgayThayDoi', 'ThoiGianThayDoi', 'NguoiThayDoi_Id', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id'];

    List: CLSYeuCau_ThayDoi[] | undefined;
    ListFilter: CLSYeuCau_ThayDoi[] | undefined;
    FormData!: CLSYeuCau_ThayDoi;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSYeuCau_ThayDoi";
    }
}

