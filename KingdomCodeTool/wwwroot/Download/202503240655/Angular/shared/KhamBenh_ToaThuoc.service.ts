import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KhamBenh_ToaThuoc } from './KhamBenh_ToaThuoc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class KhamBenh_ToaThuocService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KhamBenh_ToaThuoc_Id', 'SoThuTuToa', 'LoaiToaThuoc', 'KhamBenh_Id', 'BacSi_Id', 'NgayToaThuoc', 'ThoiGianToaThuoc', 'HuyToaThuoc', 'GhiChu', 'ChungTuPhatThuoc_Id', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'KhoXuat_Id', 'Duyet', 'NgayDuyet', 'ThoiGianDuyet', 'NguoiDuyet_Id', 'ThoiGianTao'];

    List: KhamBenh_ToaThuoc[] | undefined;
    ListFilter: KhamBenh_ToaThuoc[] | undefined;
    FormData!: KhamBenh_ToaThuoc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "KhamBenh_ToaThuoc";
    }
}

