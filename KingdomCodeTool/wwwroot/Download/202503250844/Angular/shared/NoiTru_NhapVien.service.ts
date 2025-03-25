import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_NhapVien } from './NoiTru_NhapVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_NhapVienService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'NhapVien_Id', 'TiepNhan_Id', 'NgayNhapVien', 'ThoiGianNhapVien', 'NoiNhapVien_Id', 'BacSiChiDinh_Id', 'LyDoNhapVien_Id', 'KhoaDieuTri_Id', 'BenhAn_Id', 'ChanDoan', 'ICD_ChanDoan', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'KhamBenh_Id', 'CapCuu', 'LoaiBenhAn_Id'];

    List: NoiTru_NhapVien[] | undefined;
    ListFilter: NoiTru_NhapVien[] | undefined;
    FormData!: NoiTru_NhapVien;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_NhapVien";
    }
}

