import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML8_CV130 } from './XML8_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML8_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML8_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'MA_LOAI_KCB', 'HO_TEN_CHA', 'HO_TEN_ME', 'NGUOI_GIAM_HO', 'DON_VI', 'NGAY_VAO', 'NGAY_RA', 'CHAN_DOAN_VAO', 'CHAN_DOAN_RV', 'QT_BENHLY', 'TOMTAT_KQ', 'PP_DIEUTRI', 'NGAY_SINHCON', 'NGAY_CONCHET', 'SO_CONCHET', 'KET_QUA_DTRI', 'GHI_CHU', 'MA_TTDV', 'NGAY_CT', 'MA_THE_TAM', 'DU_PHONG'];

    List: XML8_CV130[] | undefined;
    ListFilter: XML8_CV130[] | undefined;
    FormData!: XML8_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML8_CV130";
    }
}

