import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQuaKhangSinhDo } from './CLSKetQuaKhangSinhDo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQuaKhangSinhDoService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KetQuaKhangSinhDo_Id', 'CLSKetQua_Id', 'KhangSinhDo_Id', 'NhomKhangSinhDo_Id', 'TenNguonXetNghiem', 'KetQua', 'KhangSinhDo', 'TenKetQua', 'CapTren_Id', 'InstrMIC', 'FinalSIR', 'Rules'];

    List: CLSKetQuaKhangSinhDo[] | undefined;
    ListFilter: CLSKetQuaKhangSinhDo[] | undefined;
    FormData!: CLSKetQuaKhangSinhDo;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQuaKhangSinhDo";
    }
}

