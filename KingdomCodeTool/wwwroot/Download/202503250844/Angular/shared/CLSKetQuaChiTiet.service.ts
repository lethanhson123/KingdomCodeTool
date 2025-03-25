import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQuaChiTiet } from './CLSKetQuaChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQuaChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSKetQuaChiTiet_Id', 'CLSKetQua_Id', 'DichVu_Id', 'DonViTinh', 'KetQua', 'KetQua2', 'MucBinhThuong', 'MucBinhThuongMin', 'MucBinhThuongMax', 'BatThuong', 'ThucHienBenNgoai', 'GioiHan'];

    List: CLSKetQuaChiTiet[] | undefined;
    ListFilter: CLSKetQuaChiTiet[] | undefined;
    FormData!: CLSKetQuaChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQuaChiTiet";
    }
}

