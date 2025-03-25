import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_LuuTru } from './NoiTru_LuuTru.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_LuuTruService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'LuuTru_Id', 'BenhAn_Id', 'PhongBan_Id', 'NgayVao', 'ThoiGianVao', 'LyDoVao_Id', 'LyDoVao_Code', 'ICD_VaoKhoa', 'NgayRa', 'ThoiGianRa', 'LyDoRa_Id', 'LyDoRa_Code', 'ICD_RaKhoa', 'ChanDoanRaKhoa', 'PhongBanChuyenDen_Id', 'PhongBanChuyenDi_Id', 'BacSiDieuTriChinh_Id', 'BacSiDieuTri_Id', 'NguoiNhap_Id', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'LuuTru_Prev', 'LuuTru_Current', 'DoiTuong_Id', 'LyDoChuyenKhoa_Id', 'SiteCode', 'Mapping_Public_Id'];

    List: NoiTru_LuuTru[] | undefined;
    ListFilter: NoiTru_LuuTru[] | undefined;
    FormData!: NoiTru_LuuTru;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_LuuTru";
    }
}

