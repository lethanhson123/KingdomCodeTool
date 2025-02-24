import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML11_CV130 } from './XML11_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML11_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML11_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'SO_CT', 'SO_SERI', 'SO_KCB', 'DON_VI', 'MA_BHXH', 'MA_THE_BHYT', 'CHAN_DOAN_RV', 'PP_DIEUTRI', 'MA_DINH_CHI_THAI', 'NGUYENNHAN_DINHCHI', 'TUOI_THAI', 'SO_NGAY_NGHI', 'TU_NGAY', 'DEN_NGAY', 'HO_TEN_CHA', 'HO_TEN_ME', 'MA_TTDV', 'MA_BS', 'NGAY_CT', 'MA_THE_TAM', 'MAU_SO'];

    List: XML11_CV130[] | undefined;
    ListFilter: XML11_CV130[] | undefined;
    FormData!: XML11_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML11_CV130";
    }
}

