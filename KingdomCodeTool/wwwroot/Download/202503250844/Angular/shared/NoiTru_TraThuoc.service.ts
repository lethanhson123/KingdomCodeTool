import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_TraThuoc } from './NoiTru_TraThuoc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_TraThuocService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'NoiTru_TraThuoc_Id', 'SoPhieu', 'BenhAn_Id', 'LuuTru_Id', 'NgayTra', 'NguoiNhan_Id', 'GhiChu', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'DienGiaiNghiepVuPhatSinh', 'ThoiGianTra', 'ChungTu_Id'];

    List: NoiTru_TraThuoc[] | undefined;
    ListFilter: NoiTru_TraThuoc[] | undefined;
    FormData!: NoiTru_TraThuoc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_TraThuoc";
    }
}

