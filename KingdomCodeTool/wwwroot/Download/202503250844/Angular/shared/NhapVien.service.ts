import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NhapVien } from './NhapVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NhapVienService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'NhapVien_Id', 'TiepNhan_Id', 'NgayNhapVien', 'ThoiGianNhapVien', 'NoiNhapVien_Id', 'BacSiChiDinh_Id', 'LyDoNhapVien_Id', 'KhoaDieuTri_Id', 'BenhAnNgoaiTru_Id', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'KhamBenh_Id', 'LoaiBenhAn_Id'];

    List: NhapVien[] | undefined;
    ListFilter: NhapVien[] | undefined;
    FormData!: NhapVien;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NhapVien";
    }
}

