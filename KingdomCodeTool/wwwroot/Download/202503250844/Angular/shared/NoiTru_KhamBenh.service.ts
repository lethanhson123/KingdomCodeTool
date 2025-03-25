import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_KhamBenh } from './NoiTru_KhamBenh.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_KhamBenhService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KhamBenh_Id', 'BenhAn_Id', 'LuuTru_Id', 'LanKham', 'NgayKham', 'ThoiGianKham', 'BasSiKham_Id', 'DieuDuong_Id', 'DinhBenh', 'DienBien', 'LoiDan', 'CheDoAnUong_Id', 'CheDoChamSoc_Id', 'KhoDuoc_Id', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'DoiTuong_Id', 'CapHoLy_Id', 'LoaiToaThuoc', 'Ravien', 'KhamNgoaiTru', 'ThuocDacTri', 'NgayTaiKham', 'SoNgayHenTaiKham', 'ChungTuPhatThuoc_Id', 'BenhAn_PhatDo_NgayDieuTri_Id', 'InLai', 'InLai_User_Id', 'NoiNhanThuoc_ID', 'STT', 'SoPhieuHen'];

    List: NoiTru_KhamBenh[] | undefined;
    ListFilter: NoiTru_KhamBenh[] | undefined;
    FormData!: NoiTru_KhamBenh;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_KhamBenh";
    }
}

