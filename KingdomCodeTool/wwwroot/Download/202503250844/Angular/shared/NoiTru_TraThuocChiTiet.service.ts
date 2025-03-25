import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_TraThuocChiTiet } from './NoiTru_TraThuocChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_TraThuocChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'NoiTru_TraThuocChiTiet_Id', 'NoiTru_TraThuoc_Id', 'ToaThuoc_Id', 'Duoc_Id', 'SoLuong', 'TyLeVAT', 'GiaTriVAT', 'TyGia', 'DonGiaDoanhThu', 'DonGiaHoTro', 'DonGiaHoTroChiTra', 'DonGiaThanhToan', 'DaHoanTra', 'ChungTuTra_Id', 'TienTe_Id', 'ChungTuChiTiet_Id', 'LoaiGia_Id'];

    List: NoiTru_TraThuocChiTiet[] | undefined;
    ListFilter: NoiTru_TraThuocChiTiet[] | undefined;
    FormData!: NoiTru_TraThuocChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_TraThuocChiTiet";
    }
}

