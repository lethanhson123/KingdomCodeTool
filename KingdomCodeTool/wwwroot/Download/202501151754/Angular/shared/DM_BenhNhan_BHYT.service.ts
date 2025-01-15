import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DM_BenhNhan_BHYT } from 'src/app/shared/DM_BenhNhan_BHYT.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DM_BenhNhan_BHYTService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'BenhNhan_BHYT_Id', 'BenhNhan_Id', 'LoaiBHYT', 'SoThe', 'NgayCap', 'NgayHieuLuc', 'NgayHetHieuLuc', 'TinhThanh_CapThe_Id', 'BenhVien_KCB_Id', 'TamNgung', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'Tren3Nam', 'Tren6Thang', 'NgayHuong5Nam'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DM_BenhNhan_BHYT";
    }
}

