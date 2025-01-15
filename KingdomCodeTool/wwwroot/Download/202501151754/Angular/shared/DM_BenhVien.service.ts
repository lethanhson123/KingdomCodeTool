import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DM_BenhVien } from 'src/app/shared/DM_BenhVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DM_BenhVienService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'BenhVien_Id', 'MaBenhVien', 'TenBenhVien', 'TenBenhVien_En', 'TenBenhVien_Ru', 'DiaChi', 'Hang_Id', 'Loai_Id', 'Tuyen_Id', 'CapQuanLy_Id', 'TinhThanhPho_Id', 'TamNgung', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'SiteCode', 'Mapping_Public_Id'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DM_BenhVien";
    }
}

