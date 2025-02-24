import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML15_CV130 } from './XML15_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML15_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML15_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'STT', 'MA_BN', 'HO_TEN', 'SO_CCCD', 'PHANLOAI_LAO_VITRI', 'PHANLOAI_LAO_TS', 'PHANLOAI_LAO_HIV', 'PHANLOAI_LAO_VK', 'PHANLOAI_LAO_KT', 'LOAI_DTRI_LAO', 'NGAYBD_DTRI_LAO', 'PHACDO_DTRI_LAO', 'NGAYKT_DTRI_LAO', 'KET_QUA_DTRI_LAO', 'MA_CSKCB', 'NGAYKD_HIV', 'BDDT_ARV', 'NGAY_BAT_DAU_DT_CTX', 'DU_PHONG'];

    List: XML15_CV130[] | undefined;
    ListFilter: XML15_CV130[] | undefined;
    FormData!: XML15_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML15_CV130";
    }
}

