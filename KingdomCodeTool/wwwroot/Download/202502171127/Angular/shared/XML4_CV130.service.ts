import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML4_CV130 } from './XML4_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML4_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML4_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'STT', 'MA_DICH_VU', 'MA_CHI_SO', 'TEN_CHI_SO', 'GIA_TRI', 'DON_VI_DO', 'MO_TA', 'KET_LUAN', 'NGAY_KQ', 'MA_BS_DOC_KQ', 'DU_PHONG'];

    List: XML4_CV130[] | undefined;
    ListFilter: XML4_CV130[] | undefined;
    FormData!: XML4_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML4_CV130";
    }
}

